import * as z from 'zod';
import { Hono } from 'hono';
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/d1';
import { zValidator } from '@hono/zod-validator';
import { careTakerTable, tasksTable } from '../../database/schema';
import { endTime } from 'hono/timing';

const app = new Hono();

app.post(
	'/data/add',
	zValidator(
		'json',
		z.object({
			name: z.string(),
			email: z.string().email(),
			phoneNumber: z.number(),
			experience: z.number(),
			hourlyRate: z.number(),
			availability: z.boolean(),
			location: z.boolean(),
		})
	),
	async (c) => {
		const db = drizzle(c.env.DB);
		const { name, email, phoneNumber, experience, hourlyRate, availability, location } = c.req.valid('json');

		try {
			await db.insert(careTakerTable).values({
				name,
				email,
				phoneNumber,
				experience,
				hourlyRate,
				availability,
				location,
			});

			return c.json({ message: 'Registration Done' });
		} catch (error) {
			return c.json({ message: 'Internal server error' }, 500);
		}
	}
);

// app.put(
// 	'/data/add',
// 	zValidator(
// 		'json',
// 		z.object({
// 			name: z.string().optional(),
// 			email: z.string().email(),
// 			phoneNumber: z.number().optional(),
// 			experience: z.number().optional(),
// 			hourlyRate: z.number().optional(),
// 			availability: z.boolean().optional(),
// 		})
// 	),
// 	async (c) => {
// 		const db = drizzle(c.env.DB);
// 		const { name, email, phoneNumber, experience, hourlyRate, availability } = c.req.valid('json');

// 		try {
// 			await db
// 				.update(careTakerTable)
// 				.set({
// 					name,
// 					email,
// 					phoneNumber,
// 					experience,
// 					hourlyRate,
// 					availability,
// 				})
// 				.where(eq(careTakerTable.email, email));

// 			return c.json({ message: 'Edited Successfully' });
// 		} catch (error) {
// 			return c.json({ message: 'Internal server error' }, 500);
// 		}
// 	}
// );

app.post(
	'/data/check',
	zValidator(
		'json',
		z.object({
			email: z.string().email(),
		})
	),
	async (c) => {
		const db = drizzle(c.env.DB);
		const { email } = c.req.valid('json');

		try {
			const [{ email: isEmail }] = await db
				.select({ email: careTakerTable.email })
				.from(careTakerTable)
				.where(eq(careTakerTable.email, email));
			return c.json({ status: isEmail ? true : false }, isEmail ? 200 : 404);
		} catch (error) {
			return c.json({ message: 'Internal server error' }, 500);
		}
	}
);

app.get(
	'/data/all',
	zValidator(
		'query',
		z.object({
			email: z.string().email(),
		})
	),
	async (c) => {
		const db = drizzle(c.env.DB);
		const { email } = c.req.valid('query');

		try {
			const [careTaker] = await db.select().from(careTakerTable).where(eq(careTakerTable.email, email));
			return c.json(careTaker);
		} catch (error) {
			return c.json({ message: 'Internal server error' }, 500);
		}
	}
);

app.post(
	'/tasks',
	zValidator(
		'json',
		z.object({
			email: z.string().email(),
			task: z.string(),
			taskType: z.string(),
			endTime: z.string(),
		})
	),
	async (c) => {
		const db = drizzle(c.env.DB);

		const { email, task, taskType } = c.req.valid('json');

		try {
			const [{ elder }] = await db.select({ elder: careTakerTable.elder }).from(careTakerTable).where(eq(careTakerTable.email, email));
			if (!elder) return c.json({ message: "You don't have any elder" });
			await db.insert(tasksTable).values({ task, type: taskType, endTime, elder });
			return c.json({ message: 'Task added successfully' });
		} catch (error) {
			return c.json({ message: 'Internal server error' }, 500);
		}
	}
);

app.get('/all', async (c) => {
	const db = drizzle(c.env.DB);

	try {
		const response = await db.select().from(careTakerTable);
		return c.json(response);
	} catch (error) {
		return c.json({ message: 'Internal server error' }, 500);
	}
});

export default app;

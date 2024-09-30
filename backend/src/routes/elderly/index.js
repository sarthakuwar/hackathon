import * as z from 'zod';
import { Hono } from 'hono';
import { and, eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/d1';
import { zValidator } from '@hono/zod-validator';
import { eldersTable, tasksTable } from '../../database/schema';

const app = new Hono();

app.post(
	'/data/add',
	zValidator(
		'json',
		z.object({
			name: z.string(),
			email: z.string().email(),
			age: z.number(),
			gender: z.string(),
			residentialAddress: z.string(),
			majorDisease: z.string(),
		})
	),
	async (c) => {
		const db = drizzle(c.env.DB);
		const { name, age, gender, email, residentialAddress, majorDisease } = c.req.valid('json');

		try {
			await db.insert(eldersTable).values({
				name,
				age,
				email,
				gender,
				residentialAddress,
				majorDisease,
			});

			return c.json({ message: 'Registration Done' });
		} catch (error) {
			return c.json({ message: 'Internal server error' }, 500);
		}
	}
);

app.put(
	'/data/add',
	zValidator(
		'json',
		z.object({
			name: z.string().optional(),
			email: z.string().email(),
			age: z.number().optional(),
			gender: z.string().optional(),
			residentialAddress: z.string().optional(),
			majorDisease: z.string().optional(),
		})
	),
	async (c) => {
		const db = drizzle(c.env.DB);
		const { name, age, gender, email, residentialAddress, majorDisease } = c.req.valid('json');

		try {
			await db
				.update(eldersTable)
				.set({
					name,
					age,
					email,
					gender,
					residentialAddress,
					majorDisease,
				})
				.where(eq(eldersTable.email, email));

			return c.json({ message: 'Edited Successfully' });
		} catch (error) {
			return c.json({ message: 'Internal server error' }, 500);
		}
	}
);

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
			const [{ id }] = await db.select({ id: eldersTable.id }).from(eldersTable).where(eq(eldersTable.email, email));

			if (id) {
				return c.json({ status: true, id: response.id });
			} else {
				return c.json({ status: false }, 404);
			}
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
			const [elder] = await db.select().from(eldersTable).where(eq(eldersTable.email, email));
			return c.json(elder);
		} catch (error) {
			return c.json({ message: 'Internal server error' }, 500);
		}
	}
);

app.get(
	'/tasks',
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
			const tasks = await db.select().from(tasksTable).where(eq(tasksTable.elder, email));
			return c.json(tasks);
		} catch (error) {
			return c.json({ message: 'Internal server error' }, 500);
		}
	}
);

app.put(
	'/tasks',
	zValidator(
		'json',
		z.object({
			email: z.string().email(),
			taskId: z.number(),
		})
	),
	async (c) => {
		const db = drizzle(c.env.DB);

		const { id, taskId } = c.req.valid('json');

		try {
			const [{ status }] = await db
				.select({ status: tasksTable.status })
				.from(tasksTable)
				.where(and(eq(tasksTable.id, taskId), eq(tasksTable.elder, id)));
			if (!status) return c.json({ message: 'Task not found' });

			await db
				.update(tasksTable)
				.set({ status: !status })
				.where(and(eq(tasksTable.id, taskId), eq(tasksTable.elder, email)));

			return c.json({ message: 'Updated' });
		} catch (error) {
			return c.json({ message: 'Internal server error' }, 500);
		}
	}
);

export default app;

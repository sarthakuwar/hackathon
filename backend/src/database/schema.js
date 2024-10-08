import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { v4 as uuidv4 } from 'uuid';

export const careTakerTable = sqliteTable('care_taker', {
	name: text('name').notNull(),
	email: text('email').notNull(),
	phoneNumber: integer('phone_number').notNull(),
	experience: integer('experience').notNull().default(0),
	hourlyRate: integer('hourly_rate').notNull(),
	location: text('location').notNull(),
	availability: integer('hired', { mode: 'boolean' }).default(false),
	elder: text('elder').references(() => eldersTable.email),
});

export const eldersTable = sqliteTable('elders', {
	name: text('name').notNull(),
	email: text('email').notNull().primaryKey(),
	age: integer('age').notNull(),
	gender: text('gender').notNull(),
	residentialAddress: text('residential_address'),
	majorDisease: text('major_disease').notNull(),
	careTaker: text('care_taker').references(() => careTakerTable.email),
});

export const tasksTable = sqliteTable('tasks', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => uuidv4()),
	elder: text('elder').references(() => eldersTable.email),
	task: text('task').notNull(),
	type: text('type').notNull(),
	status: integer('status', { mode: 'boolean' }).notNull().default(false),
	endTime: integer('end_time', { mode: 'timestamp_ms' }),
});

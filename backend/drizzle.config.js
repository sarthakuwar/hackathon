import { defineConfig } from 'drizzle-kit';

/** @type { import("drizzle-kit").Config } */
export default defineConfig({
	dialect: 'sqlite',
	schema: './src/database/schema.js',
	out: './src/database/drizzle',
});

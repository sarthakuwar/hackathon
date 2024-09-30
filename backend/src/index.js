import { Hono } from 'hono';
import elderlyRoute from './routes/elderly';

const app = new Hono();

app.route('/elder', elderlyRoute);

app.get('*', async (c) => {
	return c.json({
		message: 'server up and running',
	});
});

export default app;

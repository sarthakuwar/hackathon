import { Hono } from 'hono';
import elderlyRoute from './routes/elderly';
import careTakerRoute from './routes/caretaker';

const app = new Hono();

app.route('/elder', elderlyRoute);
app.route('/caretaker', careTakerRoute);

app.get('/location', async (c) => {
	return c.json({ location: c.req.raw.cf?.city || 'Mumbai' });
});

app.get('*', async (c) => {
	return c.json({
		message: 'server up and running',
	});
});

export default app;

import cors from 'cors';
import express, { Application } from 'express';

import connect from './db/connect';
import userRoute from './router/userRoute/user.route';

const app: Application = express();
// server port
const port: number | string = process.env.PORT || 5005;
// database require
connect();
// parser
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route
const routeBaseUrl = '/api/v1';
app.use(`${routeBaseUrl}/user`, userRoute);

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

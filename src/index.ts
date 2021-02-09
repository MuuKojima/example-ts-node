import Express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 8080;
const foo = process.env.FOO || 'bar';

const app = Express();

// middlewares
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.get('/', (req: Express.Request, res: Express.Response) => {
  res.end(`Hello World ${foo}`);
});

// listen
app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});

export default app;

import {env} from 'src/config/env';
import express, {Express, Request, Response} from 'express';

const app: Express = express();
const port = env.SERVER_PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

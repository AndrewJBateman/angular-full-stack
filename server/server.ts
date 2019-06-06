import express from 'express';
import { routes } from './routes';

const app = express();
const port = 4201;

// allow any method from any host and console.log requests.
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.header(
    'Access-Control-Allow-Origin',
    '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, DELETE');
  res.header(
    'Access-Control-Allow-Credentials',
    'true');
  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  } else {
    console.log(`${req.ip} ${req.method} ${req.url}`);
    next();
  }
});

// Handle POST requests that come in formatted as JSON
app.use(express.json());

app.use('/', routes);

app.listen(port, '127.0.0.1', () => {
  console.log('Server now listening on port', port);
});

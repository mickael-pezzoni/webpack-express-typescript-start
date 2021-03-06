import express from 'express';
import environment from './config';

const app = express();

app.use(express.json());

app.use(express.static(`${__dirname}/../client`));

app.get('/', (req, res): void => {
  res.send('Well done!');
});

app.listen(environment.PORT, (): void => {
  console.log(`The application is listening on port http://localhost:${environment.PORT}`);
});

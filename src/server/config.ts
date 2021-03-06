import * as dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

const environment = {
  PORT: process.env.PORT,
};

export default environment;

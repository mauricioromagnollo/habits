import pgPromise from 'pg-promise';

const { PG_USER, PG_PASSWORD, PG_HOST, PG_PORT, PG_DATABASE } = process.env;

const pgp = pgPromise();

const database = pgp({
  user: PG_USER,
  password: PG_PASSWORD,
  host: PG_HOST,
  port: Number(PG_PORT),
  database: PG_DATABASE,
});

export default database;

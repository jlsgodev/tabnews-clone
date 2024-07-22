import { Client} from 'pg';

async function query(queryObject) {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    database: 'postgres',
    password: "LOCAL_PASSWORD",
  });
  await client.conect();
  const result =await client.query(queryObject);
  await client.end();
  return result;
}

export default {
  query: query,
};

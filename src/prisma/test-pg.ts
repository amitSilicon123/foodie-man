import pg from 'pg';

const client = new pg.Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'something',
  database: 'test',
});

async function test() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL successfully!');
  } catch (err) {
    console.error('PostgreSQL connection failed:', err);
  } finally {
    await client.end();
  }
}

test();

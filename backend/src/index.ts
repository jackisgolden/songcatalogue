import express from 'express';
import mariadb, { Pool, Connection } from 'mariadb';

const app = express();
const port = 3000;

const pool: Pool = mariadb.createPool({
  host: '127.0.0.1',
  port: 3306,
  user: 'groovyuser',
  password: 'password',
  database: 'groovy',
});

const handleDatabaseRequest = async (req: express.Request, res: express.Response, query: string) => {
  let conn: Connection | undefined; // Specify the type for conn

  try {
    conn = await pool.getConnection();
    const rows = await conn.query(query);
    res.json(rows);
  } catch (error: any) { // Specify the type for error (any or a more specific error type)
    console.error(error);
    res.status(500).send(`An error occurred while fetching data: ${error.message}`);
  } finally {
    if (conn) {
      conn.end(); // Release the database connection when done.
    }
  }
};

app.get('/songs', async (req, res) => {
  const query = 'SELECT * FROM Songs';
  handleDatabaseRequest(req, res, query);
});

app.get('/artists', async (req, res) => {
  const query = 'SELECT * FROM Artists';
  handleDatabaseRequest(req, res, query);
});

app.get('/albums', async (req, res) => {
  const query = 'SELECT * FROM Albums';
  handleDatabaseRequest(req, res, query);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

import express from 'express';
import mariadb from 'mariadb';

const app = express();
const port = 3000;

const pool = mariadb.createPool({
  host: '127.0.0.1',
  port: 3306,
  user: 'groovyuser',
  password: 'password',
  database: 'groovy'
});

app.get('/songs', async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM Songs');
    res.json(rows);
    conn.end();
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching songs');
  }
});

app.get('/artists', async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM Artists');
    res.json(rows);
    conn.end();
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching artists');
  }
});

app.get('/albums', async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM Albums');
    res.json(rows);
    conn.end();
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching albums');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


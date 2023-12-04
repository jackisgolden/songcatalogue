import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'groovyuser',
    password: 'password',
    database: 'groovy'
});

async function testConnection() {
    let connection;
    try {
        connection = await pool.getConnection();
        console.log("Connected to the database!");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    } finally {
        if (connection) {
            connection.end();
        }
        process.exit();
    }
}

testConnection();


import mariadb from 'mariadb';
import { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE} from './config';
const pool = mariadb.createPool({
    host: MYSQL_HOST,
    port: 3306,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE
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


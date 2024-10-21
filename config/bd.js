const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

class Database {
    constructor() {
        this.pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
        });
    }

    async getConnection() {
        try {
            const connection = await this.pool.getConnection();
            console.log('Conectado ao banco de dados!');
            return connection;
        } catch (err) {
            console.error('Erro ao conectar:', err);
            throw err;
        }
    }

    async query(sql, params) {
        const connection = await this.getConnection();
        try {
            const [results] = await connection.query(sql, params);
            return results;
        } catch (err) {
            console.error('Erro na consulta:', err);
            throw err;
        } finally {
            connection.release();
        }
    }
}

const db = new Database();
module.exports = db;
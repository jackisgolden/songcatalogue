"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mariadb_1 = __importDefault(require("mariadb"));
const app = (0, express_1.default)();
const port = 3000;
const pool = mariadb_1.default.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'groovyuser',
    password: 'password',
    database: 'groovy',
});
const handleDatabaseRequest = (req, res, query) => __awaiter(void 0, void 0, void 0, function* () {
    let conn; // Specify the type for conn
    try {
        conn = yield pool.getConnection();
        const rows = yield conn.query(query);
        res.json(rows);
    }
    catch (error) { // Specify the type for error (any or a more specific error type)
        console.error(error);
        res.status(500).send(`An error occurred while fetching data: ${error.message}`);
    }
    finally {
        if (conn) {
            conn.end(); // Release the database connection when done.
        }
    }
});
app.get('/songs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'SELECT * FROM Songs';
    handleDatabaseRequest(req, res, query);
}));
app.get('/artists', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'SELECT * FROM Artists';
    handleDatabaseRequest(req, res, query);
}));
app.get('/albums', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'SELECT * FROM Albums';
    handleDatabaseRequest(req, res, query);
}));
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map
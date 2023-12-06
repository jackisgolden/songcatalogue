import express, { Request, Response } from "express";
import mariadb, { Connection, Pool } from "mariadb";
import session from 'express-session';
import bcrypt from "bcrypt";
import { PrismaClient } from '@prisma/client';


const app = express();
const port = 3000;
const prisma = new PrismaClient();
app.use(express.json());

app.post(`/signup`, async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req);
  try {
    const result = await prisma.user.create({
      data: {
        Name: name,
        Email: email,
        Password: password,
      },
    });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the user.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// OLD CODE
// import {
//   MYSQL_HOST,
//   MYSQL_PORT,
//   MYSQL_USER,
//   MYSQL_PASSWORD,
//   MYSQL_DATABASE,
// } from "./config";

// const pool: Pool = mariadb.createPool({
//   host: MYSQL_HOST,
//   port: parseInt(MYSQL_PORT || "3306"),
//   user: MYSQL_USER,
//   password: MYSQL_PASSWORD,
//   database: MYSQL_DATABASE,
// });
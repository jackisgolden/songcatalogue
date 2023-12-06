import express, { Request, Response } from "express";
import mariadb, { Connection, Pool } from "mariadb";
import session from 'express-session';
import bcrypt from "bcrypt";
import { PrismaClient } from '@prisma/client';

const app = express();
app.use(express.json());
const port = 3000;
const prisma = new PrismaClient();

app.post(`/signup`, async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('POSTED!')
    const result = await prisma.user.create({
      data: {
        Name: email, // You can use the email as the Name if needed
        Email: email,
        Password: password,
        // Add any other default values or associations here
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
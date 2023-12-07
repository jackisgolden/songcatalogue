import { Request, Response } from 'express';
import bcrypt from "bcrypt";
import prisma from "../lib/prisma";
import jwt from "jsonwebtoken";

export const createUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = await prisma.user.create({
        data: {
          firstName: "John",
          lastName: "Adams",
          email: email,
          password: hashedPassword,
        },
      });
  
      res.json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the user.' });
    }
  };
  

export const deleteUser = async (req: Request, res: Response) => {
    // Logic to delete a user
};

export const changePassword = async (req: Request, res: Response) => {
    // Logic to change password
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
  
    try {
      const user = await prisma.user.findUnique({
        where: { email: email },
      });
  
      if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign(
          { userId: user.id }, 
          'HEY',
          { expiresIn: '24h' }
        );
        res.json({ token });
      } else {
        res.status(401).json({ error: 'Invalid email or password' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred during login.' });
    }
  };
// import express, { Request, Response } from "express";
// import { PrismaClient } from '@prisma/client';
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
import app from './app'
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}')
});

// const app = express();
// const port = 3000;
// const prisma = new PrismaClient();
// const saltRounds = 10;  // Adjust this number based on your security requirements

// app.use(express.json());

// // Signup Endpoint
// app.post('/signup', async (req, res) => {
//   const { email, password } = req.body;
  
//   try {
//     const hashedPassword = await bcrypt.hash(password, saltRounds);

//     const newUser = await prisma.user.create({
//       data: {
//         firstName: "John",
//         lastName: "Adams",
//         email: email,
//         password: hashedPassword,
//       },
//     });

//     res.json(newUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while creating the user.' });
//   }
// });

// // Login Endpoint
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await prisma.user.findUnique({
//       where: { email: email },
//     });
//     if(user) {
//       console.log(password, user.password);
//     }
//     if (user && await bcrypt.compare(password, user.password)) {
//       const token = jwt.sign(
//         { userId: user.id }, 
//         'HEY',
//         { expiresIn: '24h' }
//       );
//       res.json({ token });
//     } else {
//       res.status(401).json({ error: 'Invalid email or password' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred during login.' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

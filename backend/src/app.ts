import express from 'express';
import session from 'express-session';
import userRoutes from './routes/userRoutes';
import artistRoutes from './routes/artistRoutes';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(express.json());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(userRoutes);
app.use(artistRoutes);
app.use(authRoutes);

export default app;

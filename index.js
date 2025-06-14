import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import customerRoutes from './routes/customer.routes.js';
import membershipRoutes from './routes/membership.routes.js';
import { seedMemberships } from './controllers/membership.controller.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

connectDB().then(() => {
  seedMemberships(); // add dummy memberships
});

app.use('/api/customers', customerRoutes);
app.use('/api/memberships', membershipRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

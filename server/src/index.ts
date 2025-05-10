import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import carServicesRoutes from './routes/car-services/car-services.routes';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('API working... 🚀');
});

app.use('/api/car-services', carServicesRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || '';

mongoose.connect(MONGO_URL).then(() => {
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
}).catch((err) => console.log(err));

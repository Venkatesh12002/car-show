import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API working 🚀');
});

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || '';

mongoose.connect(MONGO_URL).then(() => {
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
}).catch((err) => console.log(err));

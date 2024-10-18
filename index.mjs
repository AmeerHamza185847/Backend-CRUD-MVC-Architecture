import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.mjs';

dotenv.config();

const PORT = 8000;
const app = express();
app.use(cors());
app.use(express.json());

// connection with mongodb atlas 
mongoose.connect(process.env.MONGODB_URI).then((result) => {
    console.log("Successfully connected with mongodb atlas!");
}).catch((err) => {
    console.log("Error connectimg with database", err.message);
});

// routes
app.use('/api',userRoutes);


app.listen(PORT, (req, res) => {
    console.log(`app is listening at PORT ${PORT}`);
})
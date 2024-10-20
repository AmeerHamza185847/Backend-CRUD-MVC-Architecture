import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.mjs';

// manage your application's environment variables and enhance its security and maintainability.
dotenv.config();

// port number, the server will listen at this port number
const PORT = 8000;

// creates a new instance of the Express.js
const app = express();

// enables Cross-Origin Resource Sharing (CORS) 
app.use(cors());

// parses the JSON data in the request body.
app.use(express.json());

// connection with mongodb atlas 
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Successfully connected with mongodb atlas!");
    }).catch((err) => {
        console.log("Error connectimg with database", err.message);
    });

// routes
app.use('/api', userRoutes);


app.listen(PORT, (req, res) => {
    console.log(`app is listening at PORT ${PORT}`);
})
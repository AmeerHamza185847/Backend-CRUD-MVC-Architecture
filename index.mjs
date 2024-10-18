import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const PORT = 8000;
const app = express();

// connection with mongodb atlas 
mongoose.connect(process.env.MONGODB_URI).then((result) => {
    console.log("Successfully connected with mongodb atlas!");
}).catch((err) => {
    console.log("Error connectimg with database", err.message);
});

app.listen(PORT, (req, res) => {
    console.log(`app is listening at PORT ${PORT}`);
})
import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = 8000;
const app = express();

app.listen(PORT,(req,res)=>{
    console.log(`app is listening at PORT ${PORT}`);
})
import express from 'express';

const PORT = 8000;
const app = express();

app.listen(PORT,(req,res)=>{
    console.log(`app is listening at PORT ${PORT}`);
})
import express from 'express'
import ejs from 'ejs'; 
import cors from 'cors'; 
import mongoose from 'mongoose';
import "dotenv/config"; 
import User from './models/User.js'
import bcrypt from "bcryptjs"; 


const app = express(); 

const port = 7777; 


const salt = 'sdfihbasdoibasidba'; 


app.use(cors()); 
app.use(express.json()); 


//password has been completely changed 
// mongoose.connect('MONGO_URI'); 

app.post('/register', async (req, res) => {
    const {username, password} = req.body; 
    try {
    const userDoc = await User.create({
        username, 
        password: bcrypt.hashSync(password, salt), }); 
    res.json(userDoc); 
    } catch(e){
        res.status(400).json(e); 

    }
}); 

app.listen(7777); 
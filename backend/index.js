import express from 'express'
import ejs from 'ejs'; 
import cors from 'cors'; 
import mongoose from 'mongoose';
import "dotenv/config"; 
import User from './models/User.js'
import bcrypt from "bcryptjs"; 
import brandsRouter from "./routes/Brands.js"; 

const app = express(); 

const port = 7777; 


const salt = 'sdfihbasdoibasidba'; 


app.use(cors()); 
app.use(express.json()); 

import Brand from './models/Brands.js';
import {data} from './models/starterdata.js'


import connectDB from './db.js';


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

app.use('/brands', brandsRouter); 





app.listen(7777); 

await connectDB(); 



// await Brand.deleteMany().maxTimeMS(30000)
// console.log('deleted')
// await Brand.insertMany(data)
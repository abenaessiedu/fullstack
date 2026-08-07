import express from 'express'
import ejs from 'ejs'; 
import cors from 'cors'; 
import mongoose from 'mongoose';
import "dotenv/config"; 
import User from './models/User.js'
import bcrypt from "bcryptjs"; 
import jwt from 'jsonwebtoken'; 


const app = express(); 

const port = 7777; 




const salt = bcrypt.genSaltSync(10);
const secret = 'ashakjsnfskjbsfkj'

app.use(cors({credentials: true, origin: 'http://localhost:7777'})); 
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



app.post('/login', async (req, res) => {
    const {username, password} = req.body; 
    const userDoc = await User.findOne({username})
    const passOk = bcrypt.compareSync(password, userDoc.password); // true
    if (passOk) {
        //then the user is logged in 
        jwt.sign({username, id:userDoc._id}, secret, { }, (err, token) => {
            if (err) throw err; 
            res.cookie('token', token).json('ok'); 
        })
        //res.json()

    } else {
        res.status(400).json('wrong credentials')
    
    } 


})
app.listen(7777); 
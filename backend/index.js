import express from 'express'
import ejs from 'ejs'; 
import cors from 'cors'; 
import mongoose from 'mongoose';
import "dotenv/config"; 
import User from './models/User.js'
import bcrypt from "bcryptjs"; 
import jwt from 'jsonwebtoken'; 
import cookieParser from 'cookie-parser'; 

const app = express(); 

const port = 7777; 




const salt = bcrypt.genSaltSync(10);
const secret = 'ashakjsnfskjbsfkj'

//middlewareville 
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true, 
    
})); 
app.use(express.json()); 
app.use(cookieParser()); 

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

app.get('/profile', (req, res) => {
    const {token} = req.cookies; 
    jwt.verify(token, secret, {}, (err, info ) => {
        if (err) throw err; 
        res.json(info); 
    })

})





app.listen(7777); 
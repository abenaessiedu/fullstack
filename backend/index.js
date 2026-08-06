import express from 'express'
import ejs from 'ejs'; 
import cors from 'cors'; 

const app = express(); 

const port = 5173; 

app.use(cors()); 
app.use(express.json()); 


await mongoose.connect('mongodb+srv://aessiedu98_db_user:1klnXdwRKEImGLow@cluster0.yljr0li.mongodb.net/?appName=Cluster0'); 

app.post('/register', (req, res) => {
    const {firstname, lastname, username, password} = req.body; 
    res.json({requestData: {firstname, lastname, username, password}}); 
}) 

app.listen(5173); 
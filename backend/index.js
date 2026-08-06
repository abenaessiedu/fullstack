import express from 'express'
import ejs from 'ejs'; 
import cors from 'cors'; 

const app = express(); 

const port = 5173; 

app.use(cors()); 
app.use(express.json()); 

//password has been completely changed 
mongoose.connect({}); 

app.post('/register', (req, res) => {
    const {firstname, lastname, username, password} = req.body; 
    res.json({requestData: {firstname, lastname, username, password}}); 
}) 

app.listen(5173); 
import express from 'express'
import ejs from 'ejs'; 

const app = express(); 

const port = 7777; 


app.post('/register', (req, res) => {
    res.json('test ok')
})
app.listen(7777); 
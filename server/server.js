const express = require('express');
const cors = require('cors');
const app = express();
import './db/db.js'; // Ensure this is the correct path to your db.js file      


const PORT = process.env.PORT || 4000;  
app.get('/api/data', (req, res) => {
  res.json({ 
    name: 'E-Shopping API',
    address: 'https://eshoppingapi.com',
    message: 'Welcome to the E-Shopping API' 

  });
}); 

app.use(cors({
  origin: 'http://127.0.0.1:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true 
}));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 
app.use(express.json());                

app.use(express.urlencoded({ extended: true }));        
app.use(express.static('public'));  

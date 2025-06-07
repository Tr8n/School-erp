const express = require('express');
const connectDB = require('./Db/connection');
const studentRoutes = require('./Routes/studentRoutes');

const app = express();
app.use(express.json()); // Required to parse JSON body

// Routes
app.use('/api/students', studentRoutes);

// Mongo connection
connectDB()
  .then(() => {
    app.listen(3000, () => console.log('Server running on port 3000'));
  })
  .catch((err) => console.error('Connection error:', err));

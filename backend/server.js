require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const donorsRoutes = require('./routes/donors');
const requestsRoutes = require('./routes/requests');
const eventsRoutes = require('./routes/events');

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/donors', donorsRoutes);
app.use('/api/requests', requestsRoutes);
app.use('/api/events', eventsRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> {
  console.log('MongoDB connected');
  app.listen(PORT, ()=> console.log('Server running on port', PORT));
})
.catch(err => {
  console.error('MongoDB connection error:', err.message);
});

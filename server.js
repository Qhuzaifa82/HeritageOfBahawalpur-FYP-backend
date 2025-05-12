// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const siteRoutes = require('./routes/siteRoutes');
app.use('/api/sites', siteRoutes);

const galleryRoutes = require('./routes/galleryRoutes');
app.use('/api/gallery', galleryRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);




// Connect to MongoDB Atlas using Mongoose
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas via Mongoose');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Mongoose connection failed:', err.message);
  });


// Test route
app.get('/', (req, res) => {
  res.send('Heritage of Bahawalpur API is running');
});

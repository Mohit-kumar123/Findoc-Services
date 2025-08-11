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

// MongoDB connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Connect to database
connectDB();

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'Findoc Backend is running!',
    status: 'success',
    timestamp: new Date().toISOString()
  });
});

// Import and use routes
try {
  const authRoutes = require('./routes/auth');
  const imageRoutes = require('./routes/images');
  
  app.use('/api/auth', authRoutes);
  app.use('/api/images', imageRoutes);
  
  console.log('✅ Routes loaded successfully');
} catch (error) {
  console.error('❌ Error loading routes:', error.message);
  console.error('Full error:', error);
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).json({
    message: 'Something went wrong!',
    success: false,
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Route not found',
    success: false
  });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT,'0.0.0.0', () => {
  console.log(`🚀 Findoc Backend running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Disable X-Powered-By header for security
app.disable('x-powered-by');

// Add logging middleware to see requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Health check endpoint - MUST be before static files and catch-all
app.get('/health', (req, res) => {
  console.log('✅ Health check endpoint called');
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    port: port
  });
});

// Serve static files from dist directory
const distPath = path.join(__dirname, 'dist');
console.log(`📁 Serving static files from: ${distPath}`);
app.use(express.static(distPath, {
  maxAge: '1d', // Cache static assets for 1 day
  etag: true
}));

// Handle SPA routing - catch all other routes
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('❌ Error sending index.html:', err);
      res.status(500).json({ 
        error: 'Internal Server Error',
        message: 'Could not load application'
      });
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Server error:', err);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: err.message 
  });
});

// Start server - CRITICAL: bind to 0.0.0.0 for Railway
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Server is running on http://0.0.0.0:${port}`);
  console.log(`✅ Health check: http://0.0.0.0:${port}/health`);
  console.log(`✅ Root: http://0.0.0.0:${port}/`);
  console.log(`📦 Environment: ${process.env.NODE_ENV || 'development'}`);
});
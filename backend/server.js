const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: '*' }));
app.use(express.json());

// Routes
app.use('/api', require('./routes/api'));

const server = app.listen(PORT, () => {
  console.log(`[Backend] Server is running on http://localhost:${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    const fallbackPort = Number(PORT) + 1;
    console.warn(`[Backend] Port ${PORT} is in use, switching to port ${fallbackPort}...`);
    app.listen(fallbackPort, () => {
      console.log(`[Backend] Server is running on http://localhost:${fallbackPort}`);
    });
  } else {
    console.error('[Backend] Server error:', err);
    process.exit(1);
  }
});


const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the `public` directory
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// All routes serve the `public/index.html`
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Nexus Weather is running on port', PORT);
});
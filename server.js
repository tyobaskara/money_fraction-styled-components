const express = require('express');
const path = require('path');
const app = express();

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(__dirname+'/client/dist'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname+'/client/dist/index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
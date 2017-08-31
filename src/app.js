'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/alphadev-rocks/:true', (req, res) => {
  res.send('Params: ' + req.params);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
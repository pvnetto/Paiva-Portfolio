const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.static(__dirname + '/dist'));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port);
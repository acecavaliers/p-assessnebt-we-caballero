// server.js

const express = require('express');
const path = require('path');
const app = express();
const port = 4000; // or any port you prefer

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

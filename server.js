const express = require('express');
const app = express();

app.get('/welcome/:name?', (req, res) => {
    const name = req.params.name || "Anonymous";
    res.send(`Selamat datang ${name}`);
});

app.listen(5000, () => {
    console.log('Server berjalan di port 5000');
});
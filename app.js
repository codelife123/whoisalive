// require('dotenv').config();
const express = require('express')
const path = require('path')
const app = express()
const port = 5000|| process.env.PORT;

app.get('/', (req, res) => {
    console.log(__dirname, '/maintain.html');
    res.sendFile(path.join(__dirname, '/maintain.html'));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
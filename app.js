require('dotenv').config();
const express = require('express')
const path = require('path')
var cors = require('cors')
const fetch  = require('node-fetch');
const app = express()
const port = process.env.PORT;
const DISCORD_URL = 'https://discord.com/api/webhooks/1009817071187656814/IH-9GQZ6iz4jYfduk6qUzqce8wPOo8sO-ef1aIOSU1_uPTSqYu79RsqQN7RDtglkZ9-n'

app.use(cors())
app.use(express.json())
app.post('/waitingList',(req,res)=>{
    const options = {
        method:'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            content:req.body.email
        })
    }
    fetch(DISCORD_URL,options).then(r=>{
        console.log('message sent to discord');
    })
    res.send({'success':true})
})
app.get('/', (req, res) => {
    console.log(__dirname, '/maintain.html');
    res.sendFile(path.join(__dirname, '/maintain.html'));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
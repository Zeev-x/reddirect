const express = require('express');
const fs = require('fs');

const app = express();

const port = process.env.PORT || 80;
const targetUrl = 'https://rationally-enjoyed-cat.ngrok-free.app';

app.use((req,res) => {
    var html = fs.readFileSync('./view/index.html','utf8');
        html = html.replace('[URL]',targetUrl);
    res.send(html);
});

app.listen(port, () => {
  console.log(`Proxy server running on port ${port}`);
});

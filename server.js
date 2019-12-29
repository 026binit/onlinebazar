const express = require('express');
const app = express();
const mongoConnect = require('./util/database');

const port = 5000

app.get('/', (req, res) => res.send('Hello World!'));

mongoConnect(client => {
    console.log(client);
    app.listen(port, () => console.log(`OnlineBazar app listening on port ${port}!`));    
})




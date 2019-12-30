const express = require('express');
const app = express();
const mongoConnect = require('./util/database');
const moongose = require('mongoose');

const port = 5000

app.get('/', (req, res) => res.send('Hello World!'));

// mongoConnect(client => {
//     console.log(client);
//     app.listen(port, () => console.log(`OnlineBazar app listening on port ${port}!`));    
// })

moongose.connect('mongodb+srv://monu:9546259850@cluster0-wglx5.mongodb.net/test?retryWrites=true&w=majority')
.then(result => {
    app.listen(port, () => console.log(`OnlineBazar app listening on port ${port}!`));
})
.catch(err => {
    console.log('err =>',err);
})



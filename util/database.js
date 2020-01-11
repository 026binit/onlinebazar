const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const moongose = require('mongoose');

const mongoConnect = (callback) => {
  //  MongoClient.connect('mongodb+srv://monu:9546259850@cluster0-wglx5.mongodb.net/test?retryWrites=true&w=majority')
    MongoClient.connect('mongodb+srv://monu:9546259850@cluster0-wglx5.mongodb.net/test?retryWrites=true&w=majority')
    .then(client => {
       console.log('Connected!!!');
       callback(client);
    })
    .catch(err => {
       console.log('err =>',err);
    })
}


module.exports = mongoConnect;

// let url = 'http://whatever.io/log';

// function log(message){
//     // Send an HTTP request
//     console.log(message);
// }

// module.exports = log;
// module.exports.endPoint = url;

const fs = require('fs');
let files = fs.readdirSync('./');
console.log(files);
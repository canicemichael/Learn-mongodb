// const logo = require('./logger');
// const path = require("path");
// const os = require("os");

// logo("stories");
// let pathObj = path.parse(__filename);
// console.log(pathObj);
// let freeMem = os.freemem();
// let totalMem = os.totalmem();

// console.log(`free Mem: ${freeMem}`);
// console.log(`total Mem: ${totalMem}`);

const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

const files = fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Results', files);
})
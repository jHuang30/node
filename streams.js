const fs = require("fs");
const zlib = require("zlib"); //zipping
const readStream = fs.createReadStream("example3.txt.gz"); // source stream
// const writeStream = fs.createWriteStream("example2.txt"); // destination stream
const writeStream = fs.createWriteStream("example3.txt");
// const gzip = zlib.createGzip();   //zip
const gunzip = zlib.createGunzip(); // upzip
// readStream.on("data", chunk => {
//   writeStream.write(chunk); //read/write a chunk of file
// });

// readStream.pipe(writeStream)  //same as previous lines

readStream.pipe(gunzip).pipe(writeStream);

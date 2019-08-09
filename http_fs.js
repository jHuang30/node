const http = require("http");
const fs = require("fs");

// http
//   .createServer((req, res) => {
//     const readStream = fs.createReadStream("./src/some.html");
//     res.writeHead(200, { "Content-type": "text/html" });  // for html
//     readStream.pipe(res);
//   })
//   .listen(3000);

// http
//   .createServer((req, res) => {
//     const readStream = fs.createReadStream("./src/some.json");
//     res.writeHead(200, { "Content-type": "application/json" }); // for json
//     readStream.pipe(res);
//   })
//   .listen(3000);

http
  .createServer((req, res) => {
    const readStream = fs.createReadStream("./src/aa.png");
    res.writeHead(200, { "Content-type": "image/png" }); // for image
    readStream.pipe(res);
  })
  .listen(3000);

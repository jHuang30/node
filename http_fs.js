const http = require("http");
const fs = require("fs");
const path = require("path");

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

// http
//   .createServer((req, res) => {
//     const readStream = fs.createReadStream("./src/aa.png");
//     res.writeHead(200, { "Content-type": "image/png" }); // for image
//     readStream.pipe(res);
//   })
//   .listen(3000);

http
  .createServer((req, res) => {
    let filename = path.join(
      __dirname,
      "static",
      req.url === "/" ? "index.html" : req.url
    );
    extname = path.extname(filename);

    let contentType = "text/html";

    switch (extname) {
      case ".js":
        contentType = "text/javascript";
        break;
      case ".css":
        contentType = "text/css";
        break;
      case ".json":
        contentType = "application/json";
        break;
      case ".png":
        contentType = "image/png";
        break;
      case ".jpg":
        contentType = "image/jpg";
        break;
    }

    if (contentType == "text/html" && extname == "") filename += ".html";

    fs.readFile(filename, (err, data) => {
      if (err) {
        if (err.code === "ENOENT") {
          res.end("not found");
        } else {
          res.end(`${err.code}`);
        }
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data, "utf8");
      }
    });
  })
  .listen(3000);

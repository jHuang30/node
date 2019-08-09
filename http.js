const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {    //root page
    res.write("hello world");
    res.end();
  } else {
    res.write("from other domain");
    res.end();
  }
});

server.listen("3000"); //listen to 3000

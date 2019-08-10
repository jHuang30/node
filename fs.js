const fs = require("fs");
const path = require("path");

// fs.writeFile("example.txt", "this is an example", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file created");
//     fs.readFile("example.txt", "utf8", (err, file) => {
//       if (err) console.log(err);
//       else console.log(file);
//     });
//   }
// });

// fs.rename("example.txt", "example2.txt", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file renamed");
//   }
// });

// fs.appendFile("example2.txt", "\ndata appended", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("data appended");
//   }
// });

// fs.unlink("example2.txt", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file deleted");
//   }
// });

fs.mkdir(path.join(__dirname, "/test"), {}, err => {
  if (err) throw err;
  console.log("created...");
});

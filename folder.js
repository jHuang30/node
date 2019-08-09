const fs = require("fs");
// fs.mkdir("newFolder", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.writeFile("./newFolder/example.txt", "123", err => {
//       if (err) console.log(err);
//       else console.log("file created");
//     });
//   }
// });

// fs.unlink("./newFolder/example.txt", err => {  // path here
//   if (err) {
//     console.log(err);
//   } else {
//     fs.rmdir("newFolder", err => {
//       if (err) console.log(err);
//       else console.log("folder deleted.");
//     });
//   }
// });

fs.readdir("aa", (err, files) => {
  console.log(files);    //it's an aray
  if (err) console.log(err);
  else {
    for (let file of files) {
      fs.unlink(`./aa/${file}`, err => {
        if (err) console.log(err);
        else console.log(`${file} deleted`);
      });
    }
  }
  fs.rmdir("aa", err => {
    if (err) console.log(err);
    else console.log("folder delted");
  });
});

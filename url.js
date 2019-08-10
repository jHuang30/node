const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// get url
console.log(myUrl.href);
//or
console.log(myUrl.toString());

//host domain
myUrl.host;

// host name, doesn't get port
myUrl.hostname;

console.log(myUrl.pathname); // /hello.html

myUrl.search; // ?id=100&status=active

console.log(myUrl.searchParams); //URLSearchParams { 'id' => '100', 'status' => 'active' }

myUrl.searchParams.append("abc", "123"); // add params

//loop seachParams

myUrl.searchParams.forEach((value, name) => {
  console.log(`${name}: ${value}`);
});

const http = require("http");

/*
const server = http.createServer(); //http.createServer is an event emitter by default

//First thing to do is to define/register a listener or a handler

server.on("connection", (socket) => {
  console.log("There's been a new connection");
});

server.listen(3000); //While is listens, anytimme there is a new request or connection, this server will raise an event

console.log("Listening on port 3000...");
*/

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello my Gee");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8]));
    res.end();
  }
});

server.listen(3000);

console.log("Listening on port 3000...");

/* Because of the structure of adding more routes [if(req.url === )] to our http.server object, our code easily becomes very complex, so, we don't use the http server class in building our backend services, instead, we use the EXPRESS JS Framework, which makes our life easier and our code less complex to read.

Internally, the EXPRESS Framework is built on top of the http module in Node
 */
 
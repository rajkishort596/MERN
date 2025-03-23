var http = require("http"); //*http module is used to create a server

//*createServer method is used to create a server
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<h1>Hello Rajkishor</h1>`);
});

//?server is listening on port 8080
server.listen(8080, () => {
  console.log("Server is running on port 8080");
});

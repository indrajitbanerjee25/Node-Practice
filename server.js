//http.createServer([options][, requestListener])
const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getUserData") {
    res.end("The user data");
  } else res.end("Hello world");
});
server.listen(3000);

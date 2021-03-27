const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req);
  res.write("<h1>sain banuu 500 servert tawtai moril</h1>");
  res.end();
});
server.listen(5000, () => {
  console.log("server aslaa");
});

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("source.json");
const middleWare = jsonServer.defaults();

server.use(middleWare);
server.use(router);

const PORT = 4000;
const HOST = "localhost";

server.listen(PORT, () => {
  console.log(`Json Server is running on: http:// ${HOST}:${PORT}`);
});

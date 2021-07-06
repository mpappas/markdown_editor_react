const http = require("http");
const { createHttpTerminator } = require("http-terminator");

const app = require("./app");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

let terminator;

async function startServer() {
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });

  terminator = createHttpTerminator({ server });
}

async function stop() {
  // Terminate app
  await terminator.terminate();
}

startServer();

module.exports = { stop };

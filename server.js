"use strict";

const { PeerRPCServer } = require("grenache-nodejs-http");

const { MSG } = require("./constants/enum");
const settle = require("./settle");

const orderBook = []

module.exports = function startServer(link) {
  const server = new PeerRPCServer(link, {
    timeout: 300000,
  });
  server.init();

  // const port = 1024 + Math.floor(Math.random() * 1000);
  const service = server.transport("server");
  service.listen(process.env.PORT);

  console.log(`Server listening at port ${service.port}`);
  setInterval(function () {
    link.announce(MSG.ADD_ORDER, service.port, {});
  }, 1000);

  service.on("request", (rid, key, payload, handler) => {
    if (key === MSG.ADD_ORDER) {
      // Receive new orders
      settle(orderBook, payload)
    } else {
      console.error(
        `error: key (${key}) not supported at the moment with payload (${payload})`
      );
    }
    handler.reply(null, { msg: "world" });
  });
};

"use strict";

const { PeerRPCClient } = require("grenache-nodejs-http");

const { MSG } = require("./constants/enum")
const { buyOrders } = require("./constants/orders")

module.exports = function startClient(link) {

  const client = new PeerRPCClient(link, {});
  client.init();
  // This part of the code is to initiate few orders
  // in real life situation this order would be coming from
  // peer's API to receive new orders
  setTimeout(() => {
    console.log("This is the client");
    client.request(
      MSG.ADD_ORDER,
      buyOrders[0],
      { timeout: 10000 },
      (err, data) => {
        console.log('data :>> ', data);
        if (err) {
          console.error("err:", err);
          process.exit(-1);
        }
        // console.log(data); // { msg: 'world' }
      }
    );
  }, 4000);
};

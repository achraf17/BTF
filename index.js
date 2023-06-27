"use strict";
require('dotenv').config()
const Link = require("grenache-nodejs-link");

const startServer = require("./server");
const startClient = require("./client");

const link = new Link({
  grape: process.env.GRAPE_URL,
});
link.start();

startServer(link)
startClient(link)

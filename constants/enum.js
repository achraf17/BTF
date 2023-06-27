// MSG is an enum for defining the messages that are exchanged between
// the peer across the Grenache network
const MSG = {
  ADD_ORDER: "ADD_ORDER",
};

// STATUS is an enum for order statuses
const STATUS = {
  SETTLED: "SETTLED",
  PARTIAL: "PARTIAL",
  PENDING: "PENDING",
};

module.exports = {
  MSG,
  STATUS,
};

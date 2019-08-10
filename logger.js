const EventEmiiter = require("events");
const uudi = require("uuid");

class Logger extends EventEmiiter {
  log(msg) {
    this.emit("message", { id: uudi.v4(), msg });
  }
}

module.exports = Logger;

const EventEmmiter = require("events");

const url = "http://localhostany";

class MyEventClass extends EventEmmiter {
  log(message) {
    //do something
    console.log(message);

    //raise event
    this.emit("EventName", { id: 1, url: url });
  }
}

module.exports = MyEventClass;

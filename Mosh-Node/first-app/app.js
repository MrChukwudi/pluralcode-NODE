// const { jewFunction, loggerFunction, endPoint } = require("./logger");
// const path = require("path");
// const os = require("os");
// const fs = require("fs");
// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// const ligger = require("./logger");

// function sayHello(name) {
//   console.log("Say Hello " + name);
// }

// sayHello("Desire");

// console.log(module);
// console.log(global);

// jewFunction();
// loggerFunction("This is the message in the Jewer");

// loggerFunction.log('Gee')
// console.log(loggerFunction);

// console.log(jewFunction);
// jewFunction();
// console.log(require("./logger"));
// console.log(ligger);
// ligger.loggerFunction("This is the message in the");
// loggerFunction("This is the message in the");
// console.log(ligger.endPoint);

// ligger;

// const pathObj = path.parse(__filename);

// console.log(pathObj);
// console.log(`Uptime: ${os.uptime()}`);
// console.log(`Free memory: ${os.freemem()}`);
// console.log(`Total memory: ${os.totalmem()}`);

// const myFiles = fs.readdirSync("./");
// console.log(myFiles);

// fs.readdir(".$", function (err, files) {
//   if (err) console.log("Error", err);
//   else console.log("Result: ", files);
// });

/*
//Register a Listener to listen for any event emmited
// emitter.on("jangbana", function (ilbagno) {
//   console.log("Listener Called", ilbagno);
// }); // .on is an alias for .addLister
emitter.on("jangbana", (ilbagno) => {
  console.log("Listener Called", ilbagno);
}); // .on is an alias for .addLister

//Raising an Event
emitter.emit("jangbana", { id: 3, url: "http://localhostMyJee" });

/*In the above event emit operation, the [messageLogged is the name of the event that was emitted] */

/*
emitter.addListener("theMessage", (eArg) => {
    console.log("We have heard the emitted message", eArg);
  });
  
  emitter.emit("theMessage", { data: "That Message" });
*/

const MyClass = require("./simpLogger");
const mineClass = new MyClass();

mineClass.on("EventName", (argOfEvent) => {
  console.log("Event Name has been heard");
  console.log(argOfEvent.url);
});

mineClass.log("logging");

console.log(__dirname);
console.log(__filename);

let url = "http://mylogger.io/log";

log(url);

function log(message) {
  console.log(message);
}

const jewer = () => {
  console.log("Here we are!");
};

module.exports.loggerFunction = log;
module.exports.jewFunction = jewer;
module.exports.endPoint = url;

// console.log(module.exports.endPoint);
// console.log(module.exports.loggerFunction("Here are my Men"));
// console.log(module.exports.loggerFunction);
// console.log(module.exports.loggerFunction());

// console.log(console);

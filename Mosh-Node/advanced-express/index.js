const config = require("config"); // with this, we can easily get various settings of our Application
const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const logger = require("./logger");
const auth = require("./auth");
const app = express();
const coursesRoute = require("./routes/courses");
const homeRoute = require("./routes/home");




/*
//////////////////////////////////////////////////////////////// 
// Setting the View Engine of Our application                //
///////////////////////////////////////////////////////////////
*/
app.set("view engine", "pug"); //Express will internally load this module, we don't have to require it manually.

/*
//////////////////////////////////////////////////////////////// 
//          MiddleWares                                      //
///////////////////////////////////////////////////////////////
*/
app.use(helmet());

app.use(morgan("tiny"));

app.use(express.json()); // enables parsing of json objects from request body into a normal object (req.body) using the express.json middleware

app.use(express.urlencoded({ extended: true })); // parses/checks through request objects to find url payloads (key=value&key=value) and populates the req.body object containing those key: "values" properties.

app.use(express.static("./public"));

app.use(logger); //This is the log middleware defined in logger.js file

app.use(auth); ////This is the authenticate middleware defined in auth.js file
app.use("/api/courses", coursesRoute);
app.use("/", homeRoute);

/*
//////////////////////////////////////////////////////////////// 
//          Configuration                                   //
///////////////////////////////////////////////////////////////
*/
console.log("Application Name: " + config.get("name"));
console.log("Mail Server: " + config.get("mail.host"));
console.log("Mail Server Password: " + config.get("mail.password"));

/*
//////////////////////////////////////////////////////////////////
Rendering a HTML file with View Engine:pug                      //
////////////////////////////////////////////////////////////////
*/

/*
//////////////////////////////////////////////////////////////// 
//Enabling HTTP requests logging on Dev Environment using Morgan//
// process.env.NODE_ENV === app.get('env')                      //
// They are used to get the environment in which your process is running on/
//////////////////////////////////////////////////////////////// 
*/

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  startupDebugger("Morgan enabled...");
}

// Dummy Database debugger; just for demo purposes only

dbDebugger(`The DB has been successfully connectected`);

console.log(app.get("env"));

// const port = process.env.PORT || 3000;
const port = 3000;

app.listen(port, () => {
  console.log(`Listening at Port: ${port}... `);
});

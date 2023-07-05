const express = require("express");
const app = express();
app.use(express.json()); //enables parsing of json objects in body of requests using the express.json() middleware

const Joi = require("joi");

/*
1. To enable parsing of json() objects: we need the express.json() middleware
2. We need to enable tha express package to use it: app.use
*/

/* My First Web Server */
// Definning the route
// app.get("/", (req, res) => {
//     res.send("Hello World!");
//   });

//   app.get("/api/courses", (req, res) => {
//     res.send([1, 2, 3, 4, 5, 6]);
//   });

//   // Listening to a given port for the request
//   app.listen(3000, () => {
//     console.log("listening on Port 3000:...");
//   });

/*
// Setting Up PORT environment variables
const port = process.env.PORT || 3000;

//Defining The request Handler on routes
app.get("/", (req, res) => {
  res.send("WELCOME to our App!");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
});

//Setting up the Server to listen on the given port
app.listen(port, () => {
  console.log(`listening on Port: ${port}...`);
});

// Setting routes with a single params:
app.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});

//Setting up routes with multiple parameters:
app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.params.year);
  res.send(req.params.month);
});
*/

// Some methods in this express object are:
/*
1. app.get(path, callback(req, res)) //The callback is the response handler
2. app.post()
3. app.put()
4. app.delete()
5. app.patch()
6. app.head()
7. app.option()
8. app.listen(port, callback()) //The callback is initiated/called when the server is listening
*/

const courses = [
  { id: 1, name: "Course1" },
  { id: 2, name: "Course2" },
  { id: 3, name: "Course3" },
  { id: 4, name: "Course4" },
];

app.get("/api/courses", (req, res) => {
  res.send(courses);
});
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(
    (course) => course.id === parseInt(req.params.id)
  );
  if (!course) {
    res.status(404).send("No course was found with the given ID");
  }
  res.send(course);
});

//Handling http POST requests

app.post("/api/courses", (req, res) => {
  //read the course object that should be in the body of the request: req.body; then do your validations:

  /*Validation with JOI*/
  const schema = {
    name: Joi.string().min(3).required(), //Means that name must be a string, min-length is 3, and must be compulsory
  };

  const validResult = Joi.validate(req.body.name, schema);
  console.log(validResult);

  /*Default Validation*/
  if (validResult.error) {
    //Log an error and a warning
    res.status(404).send(result.error);
  }

  //Use the properties of the course object from the request to create a new course object
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  // Add that course object to our courses array
  courses.push(course);
  console.log(courses);

  res.send(course); //Returns the new course object.
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Listening at: " + port + "...");
});

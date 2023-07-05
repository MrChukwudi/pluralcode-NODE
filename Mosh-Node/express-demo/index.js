const express = require("express");
const app = express();
app.use(express.json()); //enables parsing of json objects in body of requests using the express.json() middleware

const Joi = require("joi");

const courses = [
  { id: 1, name: "Course1" },
  { id: 2, name: "Course2" },
  { id: 3, name: "Course3" },
  { id: 4, name: "Course4" },
];

/*
//////////////////////////////////////////////////////////////// 
//          Handling http GET requests                        //
//////////////////////////////////////////////////////////////// 
*/

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

/*
//////////////////////////////////////////////////////////////// 
//          Handling http POST requests                       //
//////////////////////////////////////////////////////////////// 
*/

app.post("/api/courses", (req, res) => {
  /*Validation with JOI*/
  const schema = {
    name: Joi.string().min(3).required(),
  };

  const validResult = Joi.validate(req.body, schema);

  /*Working with the error parameter of validResult*/
  if (validResult.error) {
    res.status(404).send(validResult.error.details[0].message);
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(course);
  console.log(courses);

  res.send(course);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Listening at: " + port + "...");
});

/*
//////////////////////////////////////////////////////////////// 
//          Handling http PUT requests                       //
//////////////////////////////////////////////////////////////// 
*/

app.put("/api/courses/:id", (req, res) => {
  // retrieve the course id from the url:
  const courseID = parseInt(req.params.id);

  //Find the course that is being requested to be updated:
  const course = courses.find((c) => c.id === courseID);

  // If the course is not found; output 404 error message:
  if (!course) {
    res.status(404).send("The course you requested is not found");
  }

  //If the course is found, run the necessary validations on the course update request Data object:
  const schema = {
    name: Joi.string().min(4).required(),
  };
  const validSchema = Joi.validate(req.body, schema); //this will produce an object that has both an error object and a value object

  //if the validSchema test is not passed: oroduces an error object:
  if (validSchema.error) {
    res.status(404).send(validSchema.error.details[0].message);
  }

  // if the validSchema test is passed by the request body object i.e returns a value object:
  const updatedCourse = req.body;

  // We can then update the existing course/resource object with values from the request body object
  course.name = updatedCourse.name;
  // and so forth

  //   res.send(course);
  res.send(courses);
});

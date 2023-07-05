const express = require("express");
const myRouter = express.Router();
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

myRouter.get("/", (req, res) => {
  res.send(courses);
});
myRouter.get("/api/courses/:id", (req, res) => {
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

myRouter.post("/", (req, res) => {
  /*Validation with JOI*/
  const { error } = validateReqBody(req.body);

  /*Working with the error parameter of validResult*/
  if (error) {
    res.status(400).send(error.details[0].message);
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(course);
  console.log(courses);

  res.send(course);
});

/*
  //////////////////////////////////////////////////////////////// 
  //          Handling http PUT requests                       //
  //////////////////////////////////////////////////////////////// 
  */

myRouter.put("/:id", (req, res) => {
  // retrieve the course id from the url:
  const courseID = parseInt(req.params.id);

  //Find the course that is being requested to be updated:
  const course = courses.find((c) => c.id === courseID);

  // If the course is not found; output 404 error message:
  if (!course) {
    res.status(400).send("The course you requested is not found");
  }

  //If the course is found, run the necessary validations on the course update request Data object:
  const { error } = validateReqBody(req.body); //we destructured the validation test result object to check and access only the error object which is the only one we're interested in for now, there is another important object here called {value}

  //if the validSchema test is not passed: produces an error object:
  if (error) {
    res.status(404).send(error.details[0].message);
  }

  // if the validSchema test is passed by the request body object i.e returns a value object:
  const updatedCourse = req.body;

  // We can then update the existing course/resource object with values from the request body object
  course.name = updatedCourse.name;
  // and so forth

  //   res.send(course);
  res.send(courses);
});

/*
  /////////////////////////////////////////////////////////////////////////// 
  //Building a function to handle Validation schema creation and //Validation//
  //  Testing                                                               //
  /////////////////////////////////////////////////////////////////////////// 
  */

function validateReqBody(reqBody) {
  const schema = {
    //To validate the name property of the request body
    name: Joi.string().min(3).required(),
    //You can add additional fields and their validation criteria here:
  };

  return Joi.validate(reqBody, schema); //this will produce an object that has both an error object and a value object
}

/*
  //////////////////////////////////////////////////////////////// 
  //          Handling http DELETE requests                       //
  //////////////////////////////////////////////////////////////// 
  */

myRouter.delete("/:id", (req, res) => {
  //Read the course id to be deleted from the request parameters:
  const courseId = parseInt(req.params.id);

  //find a course using Index from the courses array whose ID matches the Id from the request params:
  const targetCourseIndex = courses.findIndex(
    (course) => course.id === courseId
  );
  //Send appropriate error message if the course is not found: i.e index of the targetCourse = -1
  if (targetCourseIndex === -1) {
    res.status(404).send("There's no such course found");
  }

  //If the targetCourse exists and it's index is equal to 1 i.e targetCourseIndex = 1:
  if (targetCourseIndex === 1) {
    //splice the Courses array at index of targetCourseIndex and only remove one item alone.
    courses.splice(targetCourseIndex, 1);
  }

  res
    .status(200)
    .send(
      `The course with courseId: ${courseId} has been successfully removed`
    );
});

module.exports = myRouter;

module.exports = app => {
    const employees = require("../controllers/employee.controller.js");
    var router = require("express").Router();
  
    // Create a new Employee
    router.post("/", employees.create);
  
    // Retrieve all Employee
    router.get("/", employees.findAll);
  
    // Retrieve a single Employee with id
    router.get("/:id", employees.findOne);
  
    app.use('/api/employees', router);
  };
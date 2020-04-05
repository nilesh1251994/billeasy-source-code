const db = require("../models");
const Employee = db.employees;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.firstname) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Employee
    const employee = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      department: req.body.department,
      salary: req.body.salary,
      address: req.body.address,
      gender: req.body.gender
    };
  
    // Save Employee in the database
    Employee.create(employee)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Employee."
        });
      });
  };

  exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  
    Employee.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Employee."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Employee.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Employee with id=" + id
        });
      });
  };
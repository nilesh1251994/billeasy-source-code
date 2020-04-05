module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      department: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      }
    });
  
    return Employee;
  };
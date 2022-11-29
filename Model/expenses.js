const Sequelize = require('sequelize');

const sequelize = require('../Util/database');

const Expense = sequelize.define('Expenses', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
 chooseExpenseAmount: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  chooseDescription: {
    type: Sequelize.STRING,
    allowNull: false
  },
 chooseCategory: {
    type: Sequelize.STRING,
    allowNull: false
  }

});

module.exports = Expense;
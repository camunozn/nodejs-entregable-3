const Users = require('./users.model');
const Todos = require('./todos.model');
const Categories = require('./categories.model');

const initModels = () => {
  // Users - Todos
  Users.hasMany(Todos, { foreignKey: 'user_id' });
  Todos.belongsTo(Users, { foreignKey: 'user_id' });

  // Todos - Categories
  Categories.hasMany(Todos, { foreignKey: 'category_id' });
  Todos.belongsTo(Categories, { foreignKey: 'category_id' });
};

module.exports = initModels;

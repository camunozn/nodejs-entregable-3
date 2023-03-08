const Todos = require('../models/todos.model');
const Categories = require('../models/categories.model');

class TodosServices {
  static async getAllByUser(userId) {
    try {
      const result = await Todos.findAll({
        where: { userId },
        attributes: { exclude: ['categoryId'] },
        include: [
          {
            model: Categories,
            attributes: ['name'],
          },
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(newTodo) {
    try {
      const result = await Todos.create(newTodo);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(newData, id) {
    try {
      const result = await Todos.update(newData, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = await Todos.destroy({
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TodosServices;

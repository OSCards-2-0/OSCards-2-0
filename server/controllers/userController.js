/*
 * This controller handles routes to localhost:3000/card
 * "Queries are Not Promises," from mongo docs: https://mongoosejs.com/docs/queries.html
 */

const UserModel = require('../Models/user');

const userController = {};

userController.getUser= (req, res, next) => {
  // deconstruct properties required in mongoose/mongo model from request.body
  const { username, password } = req.body;
  // instantiate a new card document via the mongoose model
  UserModel.findOne({ username, password })
    .then((results) => {
      res.locals.newCard = results;
      return next();
    })
    .catch(() => next(new Error('Error in addCard create method')));
};

userController.createUser = (req, res, next) => {
    const { username, password } = req.body;
    UserModel.create({});
}

module.exports = cardController;
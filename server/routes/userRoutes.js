/*
 * This router handles routes to localhost:3000/user
 */

const express = require('express');
const userController = require('../controllers/userControllers');

const cardRouter = express.Router();

// directs post requests made to the root endpoint of /card to the cardController
userRouter.post('/user', userController.getUser, (req, res) => {
  res.status(200).send(res.locals.user);
});

module.exports = userRouter;

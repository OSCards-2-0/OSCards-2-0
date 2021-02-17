/*
 * This controller handles routes to localhost:3000/card
 * "Queries are Not Promises," from mongo docs: https://mongoosejs.com/docs/queries.html
 */

const CardModel = require('../models/card');

const deckController = {};

deckController.readDeckOfCards = (req, res, next) => {
  // deconstruct property required in mongoose/mongo model's find method from request.params
  const { deckId } = req.params;
  // declare constant using mongo db query
  const query = CardModel.find({ deckId });

  // create functional promise out of mongodb query
  const promise = query.exec();

  promise
    .then((data) => {
      res.locals.data = data;
      console.log(res.locals.data);
      next();
    })
    .catch(() => next(new Error('Error in readDeckOfCards read method')));
};



deckController.deleteCard = (req, res, next) => {
  const { cardId } = req.params;

  // try {
  //   const result = CardModel.deleteOne({ _id: `${cardId}` });
  //   console.log('TESTING', result);
  //   res.locals.count = result;
  //   return next()
  // } catch (err) {
  //   console.error(err);
  // }



  // const query = CardModel.deleteOne({ _id: `${cardId}` });
  // const promise = query.exec();
  // promise
  //   .then(data => {
  //     res.locals.count = data;
  //     console.log('TESTING RES.LOCALS.COUNT', res.locals.count);
  //     next();
  //   })
  //   .catch(() => next(new Error('Error in readDeckOfCards read method')));



  CardModel.deleteOne({ _id: `${cardId}` })
    .then(data => {
      res.locals.count = data.n;
      // console.log('TESTING DATA: ', data);
      return next();
    })
    .catch(err => next(err));
}


module.exports = deckController;

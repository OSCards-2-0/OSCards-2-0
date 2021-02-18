const {MongoClient} = require('mongodb');
// const request = require('supertest');
require('dotenv').config();

describe('insert', () => {
  let connection;
  let db;

  let userId;
  let cardId;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    db = await connection.db("<OSCards>");
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insert into the users collection', async () => {
    const users = db.collection('users');
    const mockUser = {
      username: 'John',
      password: 'Doe'
    }; 
    console.log("mockUser before: ", mockUser);
    const {username, password} = mockUser;
    console.log("mockUser before 2: ", mockUser);
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({username});
    console.log("mockUser after: ", mockUser);
    console.log("insertedUser: ",insertedUser);
    expect(insertedUser).toEqual(mockUser);

  });

  // it('should insert into the cards collection', async () => {
  //   const cards = db.collection('cards');
  //   const mockCard = {
  //     term: 'Term',
  //     definition: 'Definition',
  //     deckId: '1'
  //   };
  //   const {term, definition, deckId} = mockCard;
  //   await cards.insertOne(mockCard);

  //   const insertedCard = await cards.findOne({term, definition, deckId});
  //   console.log("mockCard: ", mockCard);
  //   console.log("insertedCard: ", insertedCard);
  //   expect(insertedCard).toEqual(mockCard);

  // });
});
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  username : {type: String, required: true},
  password: {type: String, required: true},
  decks: [{
    deck: String,
    cards: [{
      description: String,
      id: {
        type: Schema.Types.ObjectId,
        ref: 'Card'
      }
    }]
  }],
})

const User = mongoose.model('User', userSchema);
 
module.exports = User;
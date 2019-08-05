const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/seed-test', { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
  name: String,
  username: { type: String, minlength: 4, maxlength: 255 },
  email: String,
  age: Number
})

const User = mongoose.model('User', userSchema);

// const user1 = new User({ name: 'Stefan Klinkusch', username: "sklinkusch", email: "stefan.klinkusch@googlemail.com" });

// const user2 = new User({ name: 'Kyle Simpson', username: "kylesim", email: "kyle@gmail.com" });

const user3 = new User({ name: "Dummy", username: "me", email: "something@gmail.com" });

// user1.save().then(() => console.log('Meow!'));
// user2.save().then(() => console.log('Woohoo!'));
user3.save().then(() => console.log('Yeah'));
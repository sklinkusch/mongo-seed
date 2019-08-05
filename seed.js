const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/seed-test', { useNewUrlParser: true });

const User = mongoose.model('User', { name: String, username: String, email: String, age: Number });

const user1 = new User({ name: 'Stefan Klinkusch', username: "sklinkusch", email: "stefan.klinkusch@googlemail.com" });

const user2 = new User({ name: 'Kyle Simpson', username: "kylesim", email: "kyle@gmail.com" });

user1.save().then(() => console.log('Meow!'));
user2.save().then(() => console.log('Woohoo!'));
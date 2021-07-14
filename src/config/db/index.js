const mongoose = require('mongoose');

async function connect() {
    try {
    await mongoose.connect('mongodb+srv://giaketanphat:giaketanphat123@cluster0.owm79.mongodb.net/giakesieuthi?retryWrites=true&w=majority', {

  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
console.log('Connect Successfully')
    }
    catch (error){
        console.log('Tiên sư mày')
    }
}
module.exports = {connect};

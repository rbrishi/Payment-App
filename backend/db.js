const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://brishabh100:Rishabh123@cluster0.wppzval.mongodb.net/paytm"
);

//create user Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});

//Create Model
const User = mongoose.model("User", userSchema);
//export model
module.exports = {
  User,
};

var mongoose = require("mongoose");

var users = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  }
})

var userRegister = new mongoose.Schema({
  name: {
    type: String,
  },
  IDNumber: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String,
  },
  tickettype: {
    type: String,
  },
  comment: {
    type: String,
  },
  isPay: {
    type: Boolean,
    default: false,
  }
})

var feedback = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  }
})

module.exports = {
  users: mongoose.model("users", users),
  userRegister: mongoose.model("userRegister", userRegister),
  feedback: mongoose.model("feedback", feedback)
};

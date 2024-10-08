const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

  name: {
    type: String,
    reuire: true,
  },
  age: {
    type: Number,
    reuire: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);

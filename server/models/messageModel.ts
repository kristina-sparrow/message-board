const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  text: {
    type: String,
    required: [true, "Text is required"],
  },
  added: {
    type: Date,
    default: Date.now,
  },
});

messageSchema.methods.toJSON = function () {
  const { __v, state, ...data } = this.toObject();
  return data;
};

module.exports = mongoose.model("Message", messageSchema);

const mongoose = require("mongoose");

const argonauteSchema = mongoose.Schema({
  name: { type: String },
});

module.exports = mongoose.model("Argonaute", argonauteSchema);

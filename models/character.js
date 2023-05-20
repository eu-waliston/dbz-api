const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: { type: String, trim: true, required: true, unique: true },
  species: { type: String, trim: true, default: "unknown" },
  status: { type: String, trim: true, default: "unknown" },
  originPlanet: { type: String, default: "unknown" },
  gender: { type: String, trim: true, default: "unknown" },
  series: { type: String, trim: true, required: true },
  created: { type: Date, default: Date.now },
  image: { type: String },
  url: { type: String },
  edited: { type: Date },
});

module.exports = mongoose.model("Character", CharacterSchema);

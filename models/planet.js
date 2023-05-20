const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanetSchema = new Schema({
    name: { type: String, trim: true, required: true, unique: true},
    residents: [{type: String, trimn: true}],
    created: { type: Date, default: Date.now},
    image: {type: String},
    edited: {type: Date}
})

module.exports = mongoose.model("Planet", PlanetSchema);
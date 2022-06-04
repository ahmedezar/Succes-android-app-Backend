const mongoose = require("mongoose");

const trainingSchema = mongoose.Schema(
    {
        name: String,
        price: String,
    
    }
);

const Trainigs = mongoose.model("training", trainingSchema);

module.exports = { Trainigs }
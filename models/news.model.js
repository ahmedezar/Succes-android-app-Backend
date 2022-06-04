const mongoose = require("mongoose");

const coursSchema = mongoose.Schema(
    {
        title: String,
        lien: String,
    
    }
);

const Cours = mongoose.model("cours", coursSchema);

module.exports = { Cours }
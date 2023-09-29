const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    name : {
        type: String,
        require : [true, "user name is required"]
    },
    image : {
        type: String,
        require : [true, "user image is required"]
    }
});

module.exports = mongoose.model("Image", fileSchema);
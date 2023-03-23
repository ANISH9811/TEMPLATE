const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    content:{
        type: String,
    },
    date:{
        type: DataTransfer,
        default: new Date(),
    },
});
module.exports=mongoose.model("Blog",blogSchema);
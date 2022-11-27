const mongoose = require("mongoose");
const schema = mongoose.Schema;

const adminSchema = new schema({

    bookname: { type: String, requied: true },
    bookimgaddress: { type: String, requied: true },
    author: { type: String, requied: true },
    content: { type: String, requied: true },
    date: { type: Date, default: Date.now() }

});
let adminDATA = mongoose.model("adminData", adminSchema);
module.exports = adminDATA;
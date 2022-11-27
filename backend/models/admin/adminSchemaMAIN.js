const mongoose = require("mongoose");
const schema = mongoose.Schema;

const adminSchema = new schema({

    jobname: { type: String, requied: true },
    jobimgaddress: { type: String, requied: true },
    author: { type: String, requied: true },
    content: { type: String, requied: true },
    date: { type: Date, default: Date.now() }

});
let adminDATA = mongoose.model("adminData", adminSchema);
module.exports = adminDATA;
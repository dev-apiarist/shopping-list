const db = require('mongoose');


let categorySchema = new Schema({
    category:{ type: String, required: true}
});

module.exports = db.model('Category', categorySchema);
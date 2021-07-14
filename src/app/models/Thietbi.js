const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Thietbi = new Schema({
    name: { type: String, maxLength: 225 },
    so_tang : { type: String},
    img: { type: String},
    slug: { type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
  });

module.exports = mongoose.model('Thietbi', Thietbi);

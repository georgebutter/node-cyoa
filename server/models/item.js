const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: {
    required: 'Please enter a name',
    trim: true,
    type: String,
    unique: true
  },
  description: {
    type: String
  },
  asset: {
    type: String
  }
});

StepSchema.index({ title: 1 });

const Item = mongoose.model('Item', ItemSchema);
module.exports.Item = Item;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StepSchema = new Schema({
  title: {
    required: 'Please enter a name',
    trim: true,
    type: String,
  },
  description: {
    type: String
  },
  number: {
    type: number
  }
});
StepSchema.index({ number: 1 });
const Step = mongoose.model('Step', StepSchema);
module.exports.Step = Step;

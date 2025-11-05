const mongoose = require('mongoose');

// Question schema
const questionSchema = new mongoose.Schema({
  id: { type: String, required: true },
  question: { type: String, required: true },
  type: { type: String, required: true },
  options: { type: [String], default: [] }
});

// Section schema
const sectionSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  questions: { type: [questionSchema], default: [] }
});

// ✅ Main schema (matches your stored structure)
const sampleDataSchema = new mongoose.Schema({
  sample_data: {
    sections: { type: [sectionSchema], default: [] }
  }
});

module.exports = mongoose.model('sample_data', sampleDataSchema);

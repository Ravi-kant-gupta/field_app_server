// models/question.model.js
const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  id: { type: String, required: true },
  question: { type: String, required: true },
  type: { type: String, required: true },
  options: [{ type: String }],
  answer: { type: String, default: "" },
});

// models/section.model.js
const SectionSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  questions: [QuestionSchema]
});

// models/form.model.js
const FormSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  sections: [SectionSchema],
  createdAt: { type: Date, default: Date.now },
});

const Form = mongoose.model("Form", FormSchema);

module.exports = Form;


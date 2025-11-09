// controllers/form.controller.js
const Form = require('../models/form_model');

const submitSurvey = async (req, res) => {
  try {
    const { userId, sections } = req.body;

    // Validate
    if (!userId || !sections || !Array.isArray(sections)) {
      return res
        .status(400)
        .json({ message: "Invalid request. userId and sections are required." });
    }

    // Create a new form document
    const form = new Form({
      userId,
      sections,
    });

    // Save to MongoDB
    await form.save();

    res.status(201).json({
      success: true,
      message: "Survey submitted successfully.",
      form,
    });
  } catch (error) {
    console.error("💥 Error submitting survey:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  submitSurvey,
};

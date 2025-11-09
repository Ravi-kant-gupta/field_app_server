const SampleData = require('../models/sample_data');

const rootController = (req, res) => {
  res.send({ message: 'Node.js setup successful 🎉' });
};

// Sample data controller
const getSampleDataController = async (req, res) => {
  try {
    const data = await SampleData.findOne();
    res.status(200).json({
      success: true,
      section_count: data.sample_data.sections.length,
      data
    });
  } catch (err) {
    console.error('Error fetching sample data:', err.message);
    res.status(500).json({ success: false, error: err.message });
  }
};

module.exports = {
  rootController,
  getSampleDataController
};
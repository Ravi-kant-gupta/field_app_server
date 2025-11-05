const connectDB = require('./db');
const express = require("express");
const cors = require("cors");

const SampleData = require('./models/sample_data');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
connectDB();


app.get("/", (req, res) => {
    res.send({ "message": "Node.js setup successful 🎉" });
});
console.log("Starting Node.js server...5");


app.get('/getSampleData', async (req, res) => {
  try {
    const data = await SampleData.findOne();
    res.status(200).json({
      success: true,
      count: data,
      data
    });
  } catch (err) {
    console.error("Error fetching sample data:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});



const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT || 3004}`));

 // try {
    //     const sampleJsonData = {
    //         "sections": [
    //             {
    //                 "id": "F",
    //                 "title": "Part F – Daily Flight Details",
    //                 "questions": [
    //                     {
    //                         "id": "F1",
    //                         "question": "Day number of operation",
    //                         "type": "text"
    //                     },
    //                     {
    //                         "id": "F2",
    //                         "question": "What is the date?",
    //                         "type": "date"
    //                     },
    //                     {
    //                         "id": "F3",
    //                         "question": "Select EPC contractor",
    //                         "type": "dropdown",
    //                         "options": ["L&T", "Tata Projects", "Adani", "Sterlite", "Other"]
    //                     },
    //                     {
    //                         "id": "F4",
    //                         "question": "Specify the stretch section",
    //                         "type": "dropdown",
    //                         "options": [
    //                             "62/03 to 62/01",
    //                             "63/05 to 63/08",
    //                             "65/0 to 66/0",
    //                             "66/0 to 67/0",
    //                             "Other"
    //                         ]
    //                     },
    //                     {
    //                         "id": "F5",
    //                         "question": "Enter the flight number",
    //                         "type": "number"
    //                     },
    //                     {
    //                         "id": "F6",
    //                         "question": "Who is the pilot in command?",
    //                         "type": "dropdown",
    //                         "options": [
    //                             "Adi",
    //                             "Anmol",
    //                             "Deekshit",
    //                             "Divyamshu",
    //                             "Mitra",
    //                             "Mithra",
    //                             "Phill",
    //                             "Pilot",
    //                             "Pradeep",
    //                             "Pritanshu",
    //                             "Ratan",
    //                             "Rathan",
    //                             "Rohit",
    //                             "Shakti",
    //                             "Shaktivel",
    //                             "Vishwa"
    //                         ]
    //                     },
    //                     {
    //                         "id": "F7",
    //                         "question": "Who operated the GCS?",
    //                         "type": "text"
    //                     },
    //                     {
    //                         "id": "F8",
    //                         "question": "Which aircraft was used?",
    //                         "type": "dropdown",
    //                         "options": [
    //                             "DJI M300 RTK",
    //                             "DJI M350 RTK",
    //                             "DJI Mavic 3E",
    //                             "Custom UAV",
    //                             "Other"
    //                         ]
    //                     },
    //                     {
    //                         "id": "F9",
    //                         "question": "Which transmission system was used?",
    //                         "type": "dropdown",
    //                         "options": ["OcuSync", "Lightbridge", "Other"]
    //                     },
    //                     {
    //                         "id": "F10",
    //                         "question": "Enter the circuit number",
    //                         "type": "text"
    //                     },
    //                     {
    //                         "id": "F11",
    //                         "question": "Select the phase used",
    //                         "type": "dropdown",
    //                         "options": ["Bottom", "Middle", "Top"]
    //                     },
    //                     {
    //                         "id": "F12",
    //                         "question": "Flight distance covered (in meters)",
    //                         "type": "number"
    //                     },
    //                     {
    //                         "id": "F13",
    //                         "question": "Total flight time (in minutes)",
    //                         "type": "number"
    //                     },
    //                     {
    //                         "id": "F14",
    //                         "question": "Primary line (18 mm) pullback time",
    //                         "type": "time"
    //                     },
    //                     {
    //                         "id": "F15",
    //                         "question": "Remarks for today's flight",
    //                         "type": "text_area"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "id": "G",
    //                 "title": "Part G – Daily Flight Details (Continuation)",
    //                 "questions": [
    //                     {
    //                         "id": "G1",
    //                         "question": "Day number of operation",
    //                         "type": "text"
    //                     },
    //                     {
    //                         "id": "G2",
    //                         "question": "What is the date?",
    //                         "type": "date"
    //                     },
    //                     {
    //                         "id": "G3",
    //                         "question": "Select EPC contractor",
    //                         "type": "dropdown",
    //                         "options": ["L&T", "Tata Projects", "Adani", "Sterlite", "Other"]
    //                     },
    //                     {
    //                         "id": "G4",
    //                         "question": "Specify the stretch section",
    //                         "type": "dropdown",
    //                         "options": [
    //                             "62/03 to 62/01",
    //                             "63/05 to 63/08",
    //                             "65/0 to 66/0",
    //                             "66/0 to 67/0",
    //                             "Other"
    //                         ]
    //                     },
    //                     {
    //                         "id": "G5",
    //                         "question": "Enter the flight number",
    //                         "type": "number"
    //                     },
    //                     {
    //                         "id": "G6",
    //                         "question": "Who is the pilot in command?",
    //                         "type": "dropdown",
    //                         "options": [
    //                             "Adi",
    //                             "Anmol",
    //                             "Deekshit",
    //                             "Divyamshu",
    //                             "Mitra",
    //                             "Mithra",
    //                             "Phill",
    //                             "Pilot",
    //                             "Pradeep",
    //                             "Pritanshu",
    //                             "Ratan",
    //                             "Rathan",
    //                             "Rohit",
    //                             "Shakti",
    //                             "Shaktivel",
    //                             "Vishwa"
    //                         ]
    //                     },
    //                     {
    //                         "id": "G7",
    //                         "question": "Who operated the GCS?",
    //                         "type": "text"
    //                     },
    //                     {
    //                         "id": "G8",
    //                         "question": "Which aircraft was used?",
    //                         "type": "dropdown",
    //                         "options": [
    //                             "DJI M300 RTK",
    //                             "DJI M350 RTK",
    //                             "DJI Mavic 3E",
    //                             "Custom UAV",
    //                             "Other"
    //                         ]
    //                     },
    //                     {
    //                         "id": "G9",
    //                         "question": "Which transmission system was used?",
    //                         "type": "dropdown",
    //                         "options": ["OcuSync", "Lightbridge", "Other"]
    //                     },
    //                     {
    //                         "id": "G10",
    //                         "question": "Enter the circuit number",
    //                         "type": "text"
    //                     },
    //                     {
    //                         "id": "G11",
    //                         "question": "Select the phase used",
    //                         "type": "dropdown",
    //                         "options": ["Bottom", "Middle", "Top"]
    //                     },
    //                     {
    //                         "id": "G12",
    //                         "question": "Flight distance covered (in meters)",
    //                         "type": "number"
    //                     },
    //                     {
    //                         "id": "G13",
    //                         "question": "Total flight time (in minutes)",
    //                         "type": "number"
    //                     },
    //                     {
    //                         "id": "G14",
    //                         "question": "Primary line (18 mm) pullback time",
    //                         "type": "time"
    //                     },
    //                     {
    //                         "id": "G15",
    //                         "question": "Remarks for today's flight",
    //                         "type": "text_area"
    //                     }
    //                 ]
    //             }
    //         ]
    //     };
    //     res.status(200).json(sampleJsonData);
    // } catch (error) {
    //     res.status(400).json({ message: "Error fetching sample data" });
    // }


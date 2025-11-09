const connectDB = require('./db');
const express = require("express");
const cors = require("cors");

const SampleData = require('./models/sample_data');
const router = require("./routes/routes");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
connectDB();


app.use("/",router);

app.use((req, res) => {
    res.status(404).json({ message: "Endpoint not found" });
});


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT || 3004}`));


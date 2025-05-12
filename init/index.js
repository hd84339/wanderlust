const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => console.log('MongoDB connected')).catch(err => console.log(err));
// Connect to MongoDB
async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDb = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
         owner: "681193f7533e9bf1adb207b1",
        }));
    await Listing.insertMany(initData.data);
    console.log("Database initialized with sample data.");
}
initDb();

const mongoose = require("mongoose");
const { logToFile } = require("../../utils/logsWriter");

async function connect() {
  try {
    console.log("-->", process.env.MONGODB_URL);
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logToFile("Connect DB successfully");

    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect failure!!!");
    logToFile(error);
  }
}

module.exports = { connect };

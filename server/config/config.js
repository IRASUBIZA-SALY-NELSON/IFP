const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri =
      "mongodb+srv://irasubizasalynelson:IFP@ifp.f94gf.mongodb.net/IFP?retryWrites=true&w=majority&appName=IFP";
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

connectDB();

module.exports = connectDB;

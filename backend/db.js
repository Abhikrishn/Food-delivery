const mongoose = require('mongoose');

const mongoDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Gofood', { useNewUrlParser: true });
    console.log('DB connected');
    const data = await mongoose.connection.db.collection('food_items').find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection('foodCategory').find({}).toArray();
    global.food_items = data;
    global.foodCategory =foodCategory
    console.log(global.food_items,global.foodCategory);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = mongoDB();



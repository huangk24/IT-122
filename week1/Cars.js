import mongoose from 'mongoose';
import {connectionString} from './credentials.js';
const { Schema } = mongoose;

// For security, connectionString should be in a separate file and excluded from git

mongoose.connect(connectionString, {
    dbName: 'it122',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define data model as JSON key/value pairs
// values indicate the data type of each key
const carSchema = new Schema({
 title: { type: String, required: true },
 name: String,
 brand: String,
 horsepower: Number,
 price: Number
});

export const Car = mongoose.model('Car', carSchema, 'car');
import mongoose from "mongoose"

mongoose.connect("mongodb+srv://kalil:123@cluster0.dvwmg7b.mongodb.net/mv-node");

let db = mongoose.connection;

export default db;
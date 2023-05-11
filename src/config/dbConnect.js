import mongoose from "mongoose";

mongoose.connect("mongodb+srv://thiagorbarbosa:BB0wnOBdQU0T43Yz@projeto01.683ecln.mongodb.net/database");

let db = mongoose.connection;

export default db;


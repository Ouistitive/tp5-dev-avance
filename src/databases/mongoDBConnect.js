import mongoose from 'mongoose';
import {getDatabaseUri, getDatabaseName} from '../config/config.js';

const databaseUri = "mongodb://127.0.0.1:27017/"
const databaseName = "tp5"

export default async function connectDatabase() {
    await mongoose.connect(`${databaseUri}${databaseName}`);

    const schema = new mongoose.Schema({ title: String, author: String, description: String, format: String });
    const albums = mongoose.model('albums', schema);

    const armando = new albums({ title: "le bouquin d'armando", author: "armando", description: "c'est le dernier et premier livre d'armando", format: "formarmando" });
    await armando.save();

    console.log("A");
}
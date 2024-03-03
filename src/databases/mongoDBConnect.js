import mongoose from 'mongoose';
import {getDatabaseUri, getDatabaseName} from '../config/config.js';

const databaseUri = getDatabaseUri();
const databaseName = getDatabaseName();

async function connectToDatabase() {
    try {
        // Connexion à la base de données MongoDB
        await mongoose.connect(`${databaseUri}${databaseName}`);
    } catch (error) {
        console.error('Erreur lors de la connexion à la base de données :', error);
    }
}

export const databaseConnection = connectToDatabase;

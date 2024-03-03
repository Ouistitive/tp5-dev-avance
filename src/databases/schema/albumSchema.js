import {Schema} from "mongoose";

export const albumSchema = new Schema({
    titre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    auteur: {
        type: String,
        required: true
    },
    format: {
        type: String,
        enum: ['poche', 'manga', 'audio']
    }
});
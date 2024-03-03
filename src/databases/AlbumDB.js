import {databaseConnection} from "./mongoDBConnect.js";
import {albumSchema} from "./schema/albumSchema.js";
import mongoose from "mongoose";

const Album = mongoose.model('Album', albumSchema);

export async function addAlbumToDatabase(albumObject) {
    await databaseConnection();

    const album = new Album(albumObject);

    if(album.format == null) {
        album.format = 'poche';
    }

    try {
        await album.save();
    } catch (error) {
        throw error;
    }

    return album;
}

export async function getAlbumsFromDatabase(id) {
    await databaseConnection();

    if(id == null) {
        return Album.find({}, { __v: 0 });
    }

    return Album.find({_id: id}, { __v: 0 });
}

export async function updateAlbumInDatabase(id, albumObject) {
    try {
        await databaseConnection();

        const updatedAlbum = await Album.findOneAndUpdate(
            { _id: id },
            { $set: albumObject },
            { new: true, runValidators: true }
        );

        return updatedAlbum;
    } catch (error) {
        throw error;
    }
}

export async function deleteAlbumInDatabase(id) {
    try {
        await databaseConnection();

        return await Album.findOneAndDelete({_id: id});
    } catch (error) {
        throw error;
    }
}
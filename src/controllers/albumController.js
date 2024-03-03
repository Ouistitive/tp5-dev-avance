import {
    addAlbumToDatabase,
    deleteAlbumInDatabase,
    getAlbumsFromDatabase,
    updateAlbumInDatabase
} from "../databases/AlbumDB.js";
import {albumSchemaRequest} from "./jsonSchema/albumSchemaRequest.js";

function validateRequest(request, response) {
    const validate = request.compileValidationSchema(albumSchemaRequest);

    const body = request.body;

    return validate(body);
}

export const addAlbum = async (req, res) => {
    const isValid = validateRequest(req, res);

    if (!isValid) {
        res.status(400).send({error: "Un des champs n'est pas correctement rempli"});
        return;
    }

    const album = req.body
    let albumResponse = {};

    try {
        albumResponse = await addAlbumToDatabase(album);
    } catch (error) {
        res.status(400).send({error: error.message});
        return;
    }

    res.status(200).send({album: albumResponse, message: "Album ajouté avec succès"});
}

export const getAllAlbums = async (req, res) => {
    const id = req.query.id;
    const albums = await getAlbumsFromDatabase(id);

    res.status(200).send({albums: albums});
}

export const updateAlbum = async (req, res) => {
    const isValid = validateRequest(req, res);

    if (!isValid) {
        res.status(400).send({error: "Un des champs n'est pas correctement rempli"});
        return;
    }

    const id = req.query.id;
    const album = req.body;
    let albumResponse = {};

    if(id == null) {
        res.status(400).send({error: "L'id de l'album est manquant"});
        return;
    }

    try {
        albumResponse = await updateAlbumInDatabase(id, album);
    } catch(error) {
        res.status(400).send({error: error.message});
        return;
    }


    res.status(200).send({album: albumResponse, message: "Update Album"});
}

export const deleteAlbum = async (req, res) => {
    const id = req.query.id;
    let albumResponse = {};

    if(id == null) {
        res.status(400).send({error: "L'id de l'album est manquant"});
        return;
    }

    try {
        albumResponse = await deleteAlbumInDatabase(id);
    } catch(error) {
        res.status(400).send({error: error.message});
        return;
    }

    res.status(200).send({album: albumResponse, message: "Delete Album"});
}
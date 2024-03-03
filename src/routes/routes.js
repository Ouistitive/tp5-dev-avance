import {addAlbum, deleteAlbum, getAllAlbums, updateAlbum} from "../controllers/albumController.js";
import {getAlbums} from "../controllers/jsonSchema/albumSchemaResponse.js";

export default async (app, opts) => {
    app.post('/albums/', { getAlbums }, addAlbum);
    app.put('/albums/:id', { getAlbums }, updateAlbum);
    app.delete('/albums/:id', { getAlbums }, deleteAlbum);
    app.get('/albums/', { getAlbums }, getAllAlbums);
}


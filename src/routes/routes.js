import {addAlbum} from "../controllers/login.js";

export default async (app, opts) => {
    app.post('/albums/', {}, addAlbum);
    //app.get('/albums/', {}, getAlbum);
    //app.put('/albums/', {}, updateAlbum);
    //app.delete('/albums/', {}, deleteAlbum);
}


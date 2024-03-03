const albumSchemaResponse = {
    type: 'object',
    properties: {
        _id: {type: 'string'},
        titre: {type: 'string'},
        description: {type: 'string'},
        auteur: {type: 'string'},
        format: {type: 'string', enum: ['poche', 'manga', 'audio']}
    },
    required: ['_id', 'titre', 'description', 'auteur'],
    additionalProperties: false
};

export const getAlbums = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        ...albumSchemaResponse.properties,
                        __v: { type: 'number', exclude: true } // Exclude __v field
                    },
                    required: albumSchemaResponse.required,
                    additionalProperties: albumSchemaResponse.additionalProperties
                }
            }
        }
    }
};

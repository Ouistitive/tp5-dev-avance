
export const albumSchemaRequest = {
    type: 'object',
    properties: {
        titre: { type: 'string' },
        description: { type: 'string' },
        auteur: { type: 'string' },
        format: {
            type: 'string',
            enum: ['poche', 'manga', 'audio']
        }
    },
    required: ['titre', 'description', 'auteur'],
    additionalProperties: false
}
import "dotenv/config";

export const getDatabaseUri = () => {
    return process.env.BD_URI;
}

export const getDatabaseName = () => {
    return process.env.DB_NAME;
}
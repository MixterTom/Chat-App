import dotenv from 'dotenv';

dotenv.config();

export const serverConfig = {
    port: process.env.PORT || 8080,
    host: process.env.LOCAL_HOST || 'localhost',
};
import dotenv from 'dotenv';

dotenv.config();

export const serverConfig = {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    client_IP: process.env.IP
};

export const dbConfig = {
    URL: process.env.MONGODB_URL,
};
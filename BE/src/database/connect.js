import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";

import { dbConfig } from "../config/serverConfig.js";

dotenv.config();

export const client = new MongoClient(dbConfig.URL, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});
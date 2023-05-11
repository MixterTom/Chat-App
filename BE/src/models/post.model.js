import { client } from "../database/connect.js";
import { ObjectId } from "mongodb";

class PostModel {
    constructor(database, collection) {
        this.client = client;
        this.db = database;
        this.collection = this.client.db(database).collection(collection);
    };
    async get() {
        await client.connect();
        return this.collection.find({}, (err,result) => {
            if (err) throw err;
            client.close();
            return result;
        }).toArray();
    };
    async save(post) {
        await client.connect();
        this.collection.insertOne({
            "sender": `${post.sender}`,
            "message": `${post.message}`,
            "date": `${post.date}`
        }, (err, result) => {
            if (err) throw err;
            client.close();
        });
    }
}

export default PostModel;
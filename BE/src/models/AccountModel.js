import { client } from "../database/connect.js";

class Account {
  constructor(database, collection) {
    this.client = client;
    this.db = database;
    this.collection = this.client.db(database).collection(collection);
  }
  async get() {
    await client.connect();
    return this.collection
      .find({}, (err, result) => {
        if (err) throw err;
        client.close();
        return result;
      })
      .toArray();
  }
  async save(user) {
    await client.connect();
    this.collection.insertOne(
      {
        username: `${user.username}`,
        enrollcode: `${user.enrollcode}`
      },
      (err, result) => {
        if (err) throw err;
        client.close();
      }
    );
  }
}

export default Account;
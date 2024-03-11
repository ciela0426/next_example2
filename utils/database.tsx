import { MongoClient } from "mongodb";

declare global {
  namespace globalThis {
    var _mongo: Promise<MongoClient>;
  }
}

const url =
  "mongodb+srv://admin:Da!44763514@clustertest.4a5yqsr.mongodb.net/?retryWrites=true&w=majority&appName=clusterTest";
const options: any = { useNewUrlParser: true };
let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // 개발 중 재실행을 막음
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}

export { connectDB };

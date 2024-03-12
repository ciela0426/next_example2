import { ObjectId } from "mongodb";
import { connectDB } from "../../../utils/database";

// 요청 시 보낼 데이터의 타입
interface RequestData {
  method: "GET" | "POST" | "DELETE";
  body: any;
}

// 응답 데이터의 타입
interface ResponseData {
  status: any;
  redirect: any;
}

export default async function handler(req: RequestData, res: ResponseData) {
  if (req.method == "POST") {
    console.log(req.body);
    try {
      let data = { title: req.body.title, content: req.body.content };
      const db = (await connectDB).db("forum");
      let result = await db
        .collection("post")
        .updateOne({ _id: new ObjectId(req.body._id) }, { $set: data });
      res.redirect(302, "/list");
    } catch (error) {
      res.status(500);
    }
  }
}

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
    if (req.body.title == "") {
      res.status(500).json("제목을 작성해 주세요");
    }
    if (req.body.content == "") {
      res.status(500).json("내용을 작성해 주세요");
    }
    try {
      const db = (await connectDB).db("forum");
      let result = await db.collection("post").insertOne(req.body);
      res.redirect(302, "/list");
    } catch (error) {
      res.status(500);
      console.log("error (post forum) : ", error);
    }
  }
}

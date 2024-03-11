import { connectDB } from "../../../utils/database";

// 요청 시 보낼 데이터의 타입
interface RequestData {
  method: "GET" | "POST";
  body: any;
}

// 응답 데이터의 타입
interface ResponseData {
  status: any;
}

export default async function handler(req: RequestData, res: ResponseData) {
  if (req.method == "POST") {
    console.log(req.body);
    if (req.body.title == "") {
      return res.status(500).json("제목을 작성해 주세요");
    }
    if (req.body.content == "") {
      return res.status(500).json("내용을 작성해 주세요");
    }
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").insertOne(req.body);
    return res.status(200).redirect("/list");
  }
}

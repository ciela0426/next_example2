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
  console.log("delete req.body : ", req);
  // if (req.method == "DELETE") {
  //   try {
  //     let db = (await connectDB).db("forum");
  //     let result = await db
  //       .collection("post")
  //       .deleteOne({ _id: new ObjectId(req.body._id) });
  //     res.redirect(302, "/list");
  //   } catch (error) {
  //     res.status(500);
  //   }
  // }
}

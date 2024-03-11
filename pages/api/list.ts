import { connectDB } from "../../utils/database";

// 요청 시 보낼 데이터의 타입
interface RequestData {
}

// 응답 데이터의 타입
interface ResponseData {
  status: any;
}

export default async function handler(req : RequestData, res : ResponseData){
  const db = (await connectDB).db("forum")
  let result = await db.collection('post').find().toArray()
  res.status(200).json(result)
}
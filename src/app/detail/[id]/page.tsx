import { ObjectId } from "mongodb";
import { connectDB } from "../../../../utils/database";

export default async function Detail(props: any) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  if (!result) {
    // 처리할 로직을 추가 & 오류 핸들링
    return <div>포스트를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}

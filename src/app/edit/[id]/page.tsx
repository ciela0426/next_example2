import { ObjectId } from "mongodb";
import { connectDB } from "../../../../utils/database";

export default async function Edit(props: any) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  await db
    .collection("post")
    .updateOne({}, { $set: { title: "", content: "" } });

  if (!result) {
    // 처리할 로직을 추가 & 오류 핸들링
    return <div>포스트를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h4>Edit</h4>
      <form action="/api/post/edit" method="POST">
        <input type="text" name="title" defaultValue={result.title} />
        <input type="text" name="content" defaultValue={result.content} />
        <input
          style={{ display: "none" }}
          type="text"
          name="_id "
          defaultValue={result._id.toString()}
        />
        <button type="submit">수정</button>
      </form>
    </div>
  );
}

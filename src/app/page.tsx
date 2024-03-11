import { connectDB } from "../../utils/database";

export default async function Home() {
  // const client = await connectDB;
  // const db = client.db("forum");
  // let result = await db.collection("post").find().toArray();
  // console.log(result);

  return (
    <div>
      <h4 className="title">Next.js App</h4>
      <p className="title_sub">by orbit</p>
    </div>
  );
}

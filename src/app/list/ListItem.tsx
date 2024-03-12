"use client";

import axios from "axios";
import Link from "next/link";

const ListItem = ({ result }: any) => {
  const _delete = async (_id: string) => {
    await axios
      .delete(`/api/post/delete`)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <>
      {result.map((data: any, i: number) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${result[i]._id.toString()}`}>
            <h4>{result[i].title}</h4>
          </Link>
          <Link href={`/edit/${result[i]._id.toString()}`}>✏️</Link>
          <div
            className="list-btn"
            onClick={() => {
              _delete(result[i]._id.toString());
            }}
          >
            🗑️
          </div>
          <p>1월 1일</p>
        </div>
      ))}
    </>
  );
};

export default ListItem;

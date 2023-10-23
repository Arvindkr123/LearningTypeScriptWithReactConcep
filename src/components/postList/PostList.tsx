import React from "react";
import PostCard from "../postCard/PostCard";
import { PostProps } from "@/Types/Types";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  if (!res.ok) {
    throw new Error("failed to fetch data!!")
  }
  return res.json()
}

const PostList = async () => {

  const data: PostProps[] = await getData();
  console.log(data)

  return (
    <div className="postList">
      {
        data?.map((post: PostProps) => {
          return <PostCard key={post.id} {...post} />
        })
      }
    </div>
  );
};

export default PostList;

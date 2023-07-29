import React, { useState, useEffect } from "react";

const Usehook2 = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const postsData = await response.json();
      setPosts(postsData);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {" "}
      {isLoading ? (
        <p> Loading posts... </p>
      ) : (
        <ul>
          {" "}
          {posts.map((post) => (
            <li key={post.id}> {post.title} </li>
          ))}{" "}
        </ul>
      )}{" "}
    </div>
  );
};
export default Usehook2;

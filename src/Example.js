import React, { useState, useEffect } from "react";
import "./Scroll.scss";
import axios from "axios";

export default function Example() {
  const [posts, setPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState(25);
  const [startPost, setStartPost] = useState(1);
  const [load, setLoad] = useState(true);
  const [loadB, setLoadB] = useState(false);
  async function fetchPosts() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _start: startPost,
            _limit: displayedPosts, // تحديد عدد البوستات المطلوب جلبها
          },
        }
      );
      setLoad(false);
      setPosts(response.data);
    } catch (error) {
      setLoad(false);
      console.error("Error fetching posts:", error);
    }
  }
  useEffect(() => {
    fetchPosts();
  }, [displayedPosts]); // إعادة جلب البيانات عند تغيير عدد البوستات المعروضة

  const show = () => {
    return posts.map((post) => <div key={post.id}>{post.title}</div>);
  };

  useEffect(() => {
    function handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollClient = document.documentElement.clientHeight;
      const myScroll = scrollHeight - scrollClient;
      if (window.scrollY > myScroll - 5) {
        setDisplayedPosts((prevDisplayedPosts) => prevDisplayedPosts + 5);
        fetchPosts();
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [displayedPosts]);

  return (
    <>
      {load ? <div>loading</div> : <div className="scroll">{show()}</div>}
      {/* {loadB ? <div>loading</div> : ""} */}
    </>
  );
}

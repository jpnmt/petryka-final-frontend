import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { BlogPostCard } from "./components";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

interface BlogPost {
  _id: string;
  title: string;
  body: string;
  author: string;
  date: Date;
}

function App() {
  const navigate = useNavigate();

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  const getBlogPosts = async () => {
    const url = "http://localhost:3000/blogPost";
    const result = await axios.get(url);
    setBlogPosts(result.data);
  };

  const deleteBlogPost = async (id: string) => {
    const url = `http://localhost:3000/blogPost/${id}`;
    await axios.delete(url);
    await getBlogPosts();
  };

  useEffect(() => {
    getBlogPosts();
  }, []);

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <Button onClick={() => navigate("/create")}>
          Share your thoughts with a New BlogPost!!
        </Button>
      </div>

      {blogPosts.length === 0
        ? "The Blog is empty :("
        : blogPosts.map((blogPost) => {
            return (
              <BlogPostCard
                key={blogPost._id}
                {...blogPost}
                onDelete={async () => {
                  await deleteBlogPost(blogPost._id);
                }}
              />
            );
          })}
    </div>
  );
}

export default App;

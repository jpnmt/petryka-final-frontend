import axios from "axios";
import { useNavigate } from "react-router";
import { NewBlogPostView } from "./NewBlogPostView";

export const NewBlogPost = () => {
  const navigate = useNavigate();

  interface HandleSaveProps {
    title: string;
    body: string;
    author: string;
    date: Date;
  }

  const handleSave = async ({ title, body, author, date }: HandleSaveProps) => {
    const url = "http://localhost:3000/blogPost";
    await axios.post(url, {
      title,
      body,
      author,
      date: date.toISOString().split("T")[0],
    });
    navigate("/");
  };

  return <NewBlogPostView handleSave={handleSave} />;
};

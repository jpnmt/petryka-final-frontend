import { Paper, Button, TextField } from "@mui/material";
import { useState } from "react";

interface NewBlogPostViewProps {
  handleSave: (NewBlogPost: object) => void;
}

export const NewBlogPostView = ({ handleSave }: NewBlogPostViewProps) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());

  const saveEnabled = title !== "" && body !== "" && author !== "";
  return (
    <Paper style={{ padding: "20px", backgroundColor: "#ffe7d0" }}>
      <div style={{ marginBottom: "10px" }}>Title:</div>
      <div style={{ backgroundColor: "#ffffff", marginBottom: "20px" }}>
        <TextField
          label="BlogPost Name"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>Body:</div>
      <div style={{ backgroundColor: "#ffffff", marginBottom: "20px" }}>
        <TextField
          label="BlogPost Contents"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>Author:</div>
      <div style={{ backgroundColor: "#ffffff", marginBottom: "20px" }}>
        <TextField
          label="BlogPost Creator"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>Date:</div>
      <div
        style={{
          backgroundColor: "#ffffff",
          marginBottom: "10px",
          display: "flex",
          padding: 0,
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TextField
          type="date"
          value={date.toISOString().split("T")[0]}
          onChange={(event) => setDate(new Date(event.target.value))}
          fullWidth
          style={{ padding: 0 }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          disabled={!saveEnabled}
          onClick={() =>
            handleSave({
              title,
              body,
              author,
              date,
            })
          }
          style={{ backgroundColor: "#dcfaff", marginTop: "20px" }}
        >
          Save
        </Button>
      </div>
    </Paper>
  );
};

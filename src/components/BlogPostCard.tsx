import { Paper, Typography, Button, Switch } from "@mui/material";
import { useState } from "react";

// TODO create onEdit
interface BlogPostCardProps {
  title: string;
  body: string;
  author: string;
  date: Date | string;
  onDelete: () => void;
}

export const BlogPostCard = ({
  title,
  body,
  author,
  date,
  onDelete,
}: BlogPostCardProps) => {
  const [deleteEnabled, setDeleteEnabled] = useState<boolean>(false);

  const formattedDate = new Date(date).toLocaleDateString();

  // TODO replace switch with radio buttons
  return (
    <Paper
      style={{
        padding: "20px",
        marginBottom: "10px",
        backgroundColor: "#ffe7d0",
      }}
    >
      <Typography variant="h2">{title}</Typography>
      <Typography variant="body1">{body}</Typography>
      <div>-------------------------------------</div>
      <Typography variant="subtitle2">Created by: {author}</Typography>
      <Typography variant="caption"> On {formattedDate}</Typography>
      <div>
        <Switch
          checked={deleteEnabled}
          onChange={(e) => {
            setDeleteEnabled(e.target.checked);
          }}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Button
          disabled={!deleteEnabled}
          variant="outlined"
          color="error"
          onClick={onDelete}
        >
          Remove Post
        </Button>
      </div>
    </Paper>
  );
};

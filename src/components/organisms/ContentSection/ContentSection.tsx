import { Box, Typography } from "@mui/material";

interface IContentSection {
  title: string;
  description: string;
}

function ContentSection({ title, description }: IContentSection) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <Typography variant="h2">{title}</Typography>
      <Typography
        sx={{
          fontSize: "1rem",
          wordSpacing: "0.1rem",
          textAlign: "justify",
          textIndent: "1rem",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

export default ContentSection;

import { Box, Typography } from "@mui/material";
interface IContentHeader {
  title: string;
  subtitle?: string;
}

function ContentHeader({title, subtitle}: IContentHeader) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "0.2em" }}>
      <Typography
        variant="h2"
        sx={{
          textWrap: "wrap",
        }}
      >
        {title}
      </Typography>
      {subtitle && <Typography>{subtitle}</Typography>}
    </Box>
  );
}

export default ContentHeader;

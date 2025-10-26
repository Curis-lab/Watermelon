import { Box, Typography } from "@mui/material";

type HeroHeaderProps = {
  white?: boolean;
  heading: string;
  tagline: string;
};


function HeroHeader({ heading, tagline, white = false }: HeroHeaderProps) {
  return (
    <Box
      sx={{
        padding: "2em",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <Typography variant="h5" color={white ? "white" : "black"}>
        {heading}
      </Typography>
      <Typography
        variant="body1"
        color={white ? "white" : "black"}
        sx={{
          textAlign: "justify",
        }}
      >
        {tagline}
      </Typography>
    </Box>
  );
}

export default HeroHeader;

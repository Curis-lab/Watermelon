import { Box, CircularProgress } from "@mui/material";
import React from "react";

type LoadingProps = {
  size: "sm" | "md" | "lg";
};

function Loading({ size = "lg" }: LoadingProps) {
  const sizeOfLoading: Record<string, object> = {
    sm: {
    },
    md: {
      height: "100%",
      width: "100%",
    },
    lg: {
      minHeight: "100%",
      minWidth: "100%",
    },
  };
  return (
    <Box
      sx={{
        ...sizeOfLoading[size],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Loading;

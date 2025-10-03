import { Alert, Box } from "@mui/material";
import React from "react";

function Retry({ error, refetch }: { error: string; refetch: () => void }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Alert
        severity="error"
        action={
          <button
            onClick={refetch}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Retry
          </button>
        }
      >
        {error}
      </Alert>
    </Box>
  );
}

export default Retry;

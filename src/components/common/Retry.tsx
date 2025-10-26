import { Alert, Box } from "@mui/material";

function Retry({
  error,
  refetch,
}: {
  error: null | Error;
  refetch: () => void;
}) {
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
        {typeof error === "string" ? error : ""}
      </Alert>
    </Box>
  );
}

export default Retry;

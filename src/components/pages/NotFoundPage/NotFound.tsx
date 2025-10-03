import { Box, Typography } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
        404
      </Typography>
      <Typography variant="h5" color="text.secondary">
        Page Not Found
      </Typography>
    </Box>
  );
};

export default NotFoundPage;

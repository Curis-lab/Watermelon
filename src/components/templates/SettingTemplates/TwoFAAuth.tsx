import { useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { setup2FA } from "../../../hooks/api/actions/useRegister/userRegister";

function TwoFAAuth() {
  const [response, setResponse] = useState({qrCode:''});

  const fetchQRCode = async () => {
    const { data } = await setup2FA();
    setResponse(data);
  };

  useEffect(() => {
    fetchQRCode();
  }, []);

  return (
    <div>
      Need to add two factor authentication
      <Button>Setup 2FA</Button>
      <Box>
        <img src={response.qrCode} alt="2FA QR Code" />
      </Box>
      <Typography>QR Enter the code manually.</Typography>
    </div>
  );
}

export default TwoFAAuth;

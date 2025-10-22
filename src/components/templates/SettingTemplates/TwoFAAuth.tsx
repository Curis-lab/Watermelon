import React from "react";
import { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { setup2FA } from "../../../hooks/api/actions/useRegister/userRegister";
function TwoFAAuth() {
  const [response, setResponse] = useState({});

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
      <Box>
        <img src={response.qrCode} alt="2FA QR Code" />
      </Box>
      <Typography>QR Enter the code manually.</Typography>
    </div>
  );
}

export default TwoFAAuth;

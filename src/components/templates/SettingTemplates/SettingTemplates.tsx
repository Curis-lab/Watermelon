import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { setup2FA } from "../../../hooks/api/actions/useRegister/userRegister";
import { useSession } from "../../../hooks/useSession";

function SettingTemplates() {
  const { isLoggedIn } = useSession();

  const [response, setResponse] = useState({});

  const fetchQRCode = async () => {
    const { data } = await setup2FA();
    setResponse(data);
  };

  useEffect(() => {
    fetchQRCode();
  }, []);

  console.log(response);
  console.log("is logged in", isLoggedIn);
  return (
    <Box>
      <Typography variant="h6">Settings</Typography>
      Need to add two factor authentication
      <Box>
        <img src={response.qrCode} alt="2FA QR Code" />
      </Box>
      <Typography>QR Enter the code manually.</Typography>
    </Box>
  );
}

export default SettingTemplates;

import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { useSession } from "../../../context/SessionContext";
import { useNavigate } from "react-router-dom";
import { setup2FA } from "../../../hooks/api/actions/useRegister/userRegister";

function SettingTemplates() {
  const { isLoggedIn } = useSession();
  const navigate = useNavigate();

  const [response, setResponse] = useState({});

  const fetchQRCode = async()=>{
    const {data} = await setup2FA();
    setResponse(data);
  }

  useEffect(()=>{
    fetchQRCode()
  },[]);

  console.log(response);
  console.log("is logged in", isLoggedIn);
  return (
    <div>
      <Typography variant="h6">Settings</Typography>
      Need to add two factor authentication
      <Box>
        <img src={response.qrCode} alt="2FA QR Code" />
      </Box>
      <Typography>QR Enter the code manually.</Typography>
    </div>
  );
}

export default SettingTemplates;

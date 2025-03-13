import { Modal } from "@mui/material";
import React from "react";

interface MUIModelProps{
    children: React.ReactNode
}
const MUIModel = ({children}:MUIModelProps) => {
  return (
    <Modal open={false} onClose={() => {}}>
      {children}
    </Modal>
  );
};

export default MUIModel;

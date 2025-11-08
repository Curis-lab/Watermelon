import { Modal } from "@mui/material";
import React from "react";

interface MUIModelProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const MUIModel = ({ open, onClose, children }: MUIModelProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(2px)",
      }}
    >
      {children as React.ReactElement<unknown, string>}
    </Modal>
  );
};

export default MUIModel;

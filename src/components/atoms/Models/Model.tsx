import { Modal } from "@mui/material";
import React from "react";

/**
 * title, body, footer
 */
interface MUIModelProps {
  body: React.ReactNode;

  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  footer?: React.ReactNode;
}
const MUIModel = ({ body, footer, open, onClose, title }: MUIModelProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <div
        style={{
          display: "flex",
          padding: "20px",
          flexDirection: "column",
          alignItems: "center",
          height: "31.13em",
          backgroundColor: "white",
          width: "400px",
          borderRadius: "12px",
        }}
      >
        {title}
        <div style={{ flex: 1 }}>{body}</div>
        {footer}
      </div>
    </Modal>
  );
};

export default MUIModel;

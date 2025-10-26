import { Box, Modal, styled } from "@mui/material";
import HeroHeader from "../../molecules/HeroHeader/HeroHeader";
import { hero } from "../../../contents/loginModelConfig.json";

interface MUIModelProps {
  body: React.ReactNode;
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  footer?: React.ReactNode;
}

const StyledModelContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "35rem",
  width: "90%",
  border: "none",
  background: "#fff",
  [theme.breakpoints.up("sm")]: {
    width: "90%",
  },
  [theme.breakpoints.up("md")]: {
    width: "80%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "80%",
  },
  borderRadius: "0.5rem",
  overflow: "hidden",
}));

const StyledImageBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  backgroundImage:
    "url(https://images.unsplash.com/photo-1556742208-999815fca738?q=80&w=1349&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  minWidth: "50%",
}));

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
        backdropFilter: "blur(2px)",
      }}
    >
      <StyledModelContainer>
        <StyledImageBox>
          <HeroHeader {...hero} />
        </StyledImageBox>
        <div
          style={{
            minHeight: "100%",
            width: "100%",
            minWidth: "50%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              padding: "1em",
            }}
          >
            {title}
          </div>
          <div style={{ flex: 1, padding: "2em" }}>{body}</div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBlock: "2em",
            }}
          >
            {footer}
          </div>
        </div>
      </StyledModelContainer>
    </Modal>
  );
};

export default MUIModel;

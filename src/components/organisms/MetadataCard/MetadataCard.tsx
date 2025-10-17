import { SvgIconComponent } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { createContext, useContext } from "react";
import { Link } from "react-router-dom";

type Matadata = {
  sub: string;
};

const MataContext = createContext<Matadata | undefined>(undefined);

function useMataContext() {
  const context = useContext(MataContext);
  if (!context) {
    throw new Error("useMataContext must be used within a MetadataCard.");
  }
  return context;
}
interface IMetadataCard {
  Icon: SvgIconComponent;
  content: Record<string, string>;
  children: React.ReactNode;
}

function MetadataCard({ Icon, content, children }: IMetadataCard) {
  const { title, sub } = content;

  const sizeOfIcon = {
    fontSize: 40,
    color: "#C71E64",
  };

  return (
    <MataContext.Provider value={{ sub }}>
      <Box
        sx={{
          display: "flex",
          gap: "5px",
          alignItems: "center",
        }}
      >
        <Icon sx={sizeOfIcon} />
        <Box>
          <Typography variant="body1">{title}</Typography>
          {children}
        </Box>
      </Box>
    </MataContext.Provider>
  );
}

const Text = () => {
  const { sub } = useMataContext();
  return (
    <Typography variant="body1" color="gray">
      {sub}
    </Typography>
  );
};

const ReferenceLink = ({ url }: { url: string }) => {
  if (!url) return null;
  return <Link to={url}>{url}</Link>;
};

MetadataCard.Text = Text;
MetadataCard.Link = ReferenceLink;

export default MetadataCard;

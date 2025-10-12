import { Box, Typography } from "@mui/material";
import React, { createContext, useContext } from "react";
import { Link } from "react-router-dom";

type Matadata = {
  props: IMetadataCard;
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
  icon: React.ReactNode;
  title: string;
  sub?: string;
  children: React.ReactNode;
}

function MetadataCard(props: IMetadataCard) {
  return (
    <MataContext.Provider value={{ props }}>
      <Box
        sx={{
          display: "flex",
          gap: "5px",
          alignItems: "center",
        }}
      >
        <Box>{props.icon}</Box>
        <Box>
          <Typography variant="body1">{props.title}</Typography>
          {props.children}
        </Box>
      </Box>
    </MataContext.Provider>
  );
}

const Text = () => {
  const { props } = useMataContext();
  return (
    <Typography variant="body1" color="gray">
      {props.sub}
    </Typography>
  );
};

const ReferenceLink = ({ url }: { url: string }) => {
  return <Link to={url}>{url}</Link>;
};

MetadataCard.Text = Text;
MetadataCard.Link = ReferenceLink;

export default MetadataCard;

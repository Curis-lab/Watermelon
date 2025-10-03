import React from "react";
import { Box, Typography } from "@mui/material";

interface IIconDescription {
  Icon: React.ComponentType<SvgIconProps>;
  description: string;
}

function IconDescription(props: IIconDescription) {
  const { Icon } = props;
  return (
    <Box sx={{ display: "flex", alignItems: "start", gap: "3px" }}>
      <Icon
        sx={{
          height: "0.7em",
          width: "0.7em",
        }}
      />
      <Typography style={{ fontSize: "0.88rem", letterSpacing: "0.03em" }}>
        {props.description}
      </Typography>
    </Box>
  );
}

export default IconDescription;

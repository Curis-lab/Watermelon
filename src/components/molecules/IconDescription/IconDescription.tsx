import { Box, Typography } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

interface IIconDescription {
  Icon: SvgIconComponent;
  description: string;
}

function IconDescription({ Icon, description }: IIconDescription) {
  const sizeOfIcon = {
    height: "0.7em",
    width: "0.7em",
  };
  return (
    <Box sx={{ display: "flex", alignItems: "start", gap: "3px" }}>
      <Icon sx={sizeOfIcon} />
      <Typography style={{ fontSize: "0.88rem", letterSpacing: "0.03em" }}>
        {description}
      </Typography>
    </Box>
  );
}

export default IconDescription;

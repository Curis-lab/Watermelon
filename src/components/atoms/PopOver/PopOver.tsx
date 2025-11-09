import React from "react";

import { Avatar, Box, Divider, IconButton, Popover } from "@mui/material";
import { Link } from "react-router-dom";
import {
  Logout,
  Person,
  Settings,
  SvgIconComponent,
} from "@mui/icons-material";

const LinkWithIcon = ({
  Icon,
  label,
  href,
}: {
  Icon: SvgIconComponent;
  label: string;
  href: string;
}) => (
  <Link
    style={{
      display: "flex",
      gap: "8px",
      marginBlock: "5px",
      textDecoration: "none",
    }}
    to={href}
  >
    <Icon />
    {label}
  </Link>
);

export const ProfilePopup = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <IconButton onClick={handleClick} aria-describedby={id}>
        <Avatar
          alt="user profile iamge"
          src="https://cdn.dribbble.com/userupload/15513631/file/original-5bcae1f588c45e3ce423136072afe2a8.jpg?format=webp&resize=400x300&vertical=center"
        />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: {
            padding: "15px",
            marginTop: "5px",
            minWidth: "220px",
          },
        }}
      >
        <LinkWithIcon Icon={Person} label="Profile" href="profile" />
        <LinkWithIcon Icon={Settings} label="Settings" href="settings" />

        <Divider
          sx={{
            marginBlock: "5px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            marginTop: "5px",
          }}
        >
          <Logout />
          Logout
        </Box>
      </Popover>
    </div>
  );
};

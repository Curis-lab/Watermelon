import React from "react";

import { Avatar, Divider, Popover } from "@mui/material";
import { Link } from "react-router-dom";

export const ProfilePopup = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <Avatar
        alt="user profile iamge"
        src="https://cdn.dribbble.com/userupload/15513631/file/original-5bcae1f588c45e3ce423136072afe2a8.jpg?format=webp&resize=400x300&vertical=center"
        // aria-describedby={id}
        // onClick={handleClick}
      />
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
          horizontal: "center",
        }}
        PaperProps={{
          sx: {
            padding: "15px",
            marginTop: "5px",
          },
        }}
      >
        <Link to="/profile">Profile Settings</Link>
        <Divider />
      </Popover>
    </div>
  );
};

import { Box, Skeleton,Typography } from "@mui/material";
import { ChatBubbleOutline, WorkOutline } from "@mui/icons-material";
import ContentHeader from "../../molecules/ContentHeader/ContentHeader";
import IconDescription from "../../molecules/IconDescription/IconDescription";
import React from "react";
import { StyledMentorCardContainerBox } from "./MentorCard.style";


type StateItemProps = { label: string; value: string };
const StateItem = ({ label, value }: StateItemProps) => (
  <Box>
    <Typography variant="caption">{label}</Typography>
    <Typography variant="h4">{value}</Typography>
  </Box>
);

type ids = string | object;
type MentorCardProps = {
  _id: ids;
  name: string;
  navigator: (route: string) => void;
  loading: boolean;
};

function skeletonWrapper<T>(Component: React.ComponentType<T>) {
  return ({ loading, ...props }: { loading: boolean } & T) =>
    loading ? (
      <Skeleton variant="rectangular" width="100%" height="auto" />
    ) : (
      <Component {...(props as React.JSX.Element & T)} />
    );
}


function MentorCard({ _id, name, navigator }: MentorCardProps) {
  return (
    <StyledMentorCardContainerBox
      onClick={() => navigator(`/mentor/${_id}`)}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      <Box
        sx={{
          width: "100%",
          borderRadius: "3px",
          overflow: "hidden",
          minHeight: "40%",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMh3TSq7RzA1ioI7Sj-43Sen_tDnhnftN7Lg&s"
          alt="mentor"
        />
      </Box>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <ContentHeader title={name} />
        <>
          <IconDescription
            Icon={WorkOutline}
            description="Program Manager, Product Manger at google"
          />
          <IconDescription
            Icon={ChatBubbleOutline}
            description=" 41 sessions,(5 reviews)"
          />
        </>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "rgba(16, 14, 14, 0.43)",
            padding: "0.41em",
            borderRadius: "3px",
          }}
        >
          {skeletonWrapper(StateItem)({
            loading: true,
            ...{ label: "Sessions", value: "100%" },
          })}
          <StateItem {...{ label: "Avg.Attendees", value: "100%" }} />
        </div>
      </div>
    </StyledMentorCardContainerBox>
  );
}

export default MentorCard;

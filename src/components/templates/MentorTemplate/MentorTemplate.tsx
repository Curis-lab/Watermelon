import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IMentor } from "../../../interfaces/Mentor";
import { StyledMentorCardLayoutController } from "./MentorTemplate.style";
import { MentorCardSkeletion } from "../../molecules/Skeletons/MentorCardSkeleton/MentorCardSkeleton";
import MentorCard from "../../organisms/MentorCard/MentorCard";

function LoadingAllCardDisplay() {
  return <>{Array(8).fill(<MentorCardSkeletion />)}</>;
}

function commonLoadingTemplate<TComponentProps>(
  SkeletonTemplate: React.ComponentType
) {
  return (ComponentTemplate: React.ComponentType<TComponentProps>) =>
    ({
      loadingStatus,
      ...props
    }: { loadingStatus: boolean } & TComponentProps) =>
      loadingStatus ? (
        <SkeletonTemplate />
      ) : (
        <ComponentTemplate
          {...(props as React.JSX.Element & TComponentProps)}
        />
      );
}

function MentorList({ mentors }: { mentors: IMentor[] }) {
  const navigate = useNavigate();

  return (
    <>
      {mentors.map((mentor) => (
        <MentorCard
          key={mentor._id}
          {...mentor}
          loading={true}
          navigator={(route) => navigate(route)}
        />
      ))}
    </>
  );
}

function MentorTemplate({
  mentors,
  isLoading,
}: {
  mentors: IMentor[];
  isLoading: boolean;
}) {
  return (
    <Box sx={{ minHeight: "100vh", height: "80vh" }}>
      {mentors.length > 0 ? (
        <StyledMentorCardLayoutController>
          {commonLoadingTemplate<{ mentors: IMentor[] }>(LoadingAllCardDisplay)(
            MentorList
          )({
            loadingStatus: isLoading || !Array.isArray(mentors),
            mentors: mentors,
          })}
        </StyledMentorCardLayoutController>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
            height: '100%'
          }}
        >
          <Typography
            variant="h2"
          >
            There is no mentors
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default MentorTemplate;

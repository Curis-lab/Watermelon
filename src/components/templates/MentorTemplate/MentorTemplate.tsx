import React from "react";
import { Box } from "@mui/material";
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
      <StyledMentorCardLayoutController>
        {commonLoadingTemplate<{ mentors: IMentor[] }>(LoadingAllCardDisplay)(
          MentorList
        )({
          loadingStatus: isLoading || !Array.isArray(mentors),
          mentors: mentors,
        })}
      </StyledMentorCardLayoutController>
    </Box>
  );
}

export default MentorTemplate;

// import { Box, Button, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
// import ContentHeader from "../../molecules/ContentHeader/ContentHeader";
import MentorProfileHeader from "../../organisms/MentorProfileHeader/MentorProfileHeader";
// import ContentSection from "../../organisms/ContentSection/ContentSection";
import { useGetMentorProfile } from "../../../hooks/useGetMentorProfile";
// import ReviewCard from "../../organisms/ReviewCard/ReviewCard";
// import { useReviews } from "../../../hooks/api/getters/useReviews/useReviews";
import {
  StyledDisplayProfileLayout,
  // StyledDescriptionContainer,
} from "./DisplayProfile.style";
import MUITabs from "../../atoms/Tap/Tap";
import ReviewCard from "../../organisms/ReviewCard/ReviewCard";
import { Box, Typography } from "@mui/material";
import ContentHeader from "../../molecules/ContentHeader/ContentHeader";
// import { TRoles } from "../../../types/role";

//Proxy Pattern

/**
 * purpose: Display Profile Page
 * this will display by role and their action
 */

/**
 * props requirement for this page
 * 1. mentor = {name, role, company, bio}
 * 2. available session
 */

const MentorProfileContent = {
  headerSection: {
    profilePic: "Profile Picture",
    name: "Alex Johnson",
    headline: "Senior Product Designer at Netflix | UX Mentor",
    starRating: "4.9 ★★★★☆ (X reviews)", // ADD review count
    sessionInfo: "X+ Sessions | Responds in < 24 hrs",
    ctaButton: "Book a Session",
    quickActions: ["Message", "Save", "Share"],
  } as {
    profilePic: string;
    name: string;
    headline: string;
    starRating: string;
    sessionInfo: string;
    ctaButton: "Book a Session";
    quickActions: string[];
  },
  mainBody: {
    howICanHelp: <div>How Can I help you</div>,
    areasOfExpertise: <div>["Expertise 1", "Expertise 2", "Expertise 3"]</div>,
    sessionTypes: (
      <div>
        {[
          { type: "Type 1", duration: "60 minutes", price: "$100" },
          { type: "Type 2", duration: "30 minutes", price: "$50" },
        ].map((session, idx) => (
          <Box key={idx} sx={{
          padding: '10px'
          }}>
            <Typography variant="h3">{session.type}</Typography>
            <Typography>{session.duration}</Typography>
            <Typography>prices: {session.price}</Typography>
          </Box>
        ))}
      </div>
    ),
    overview: (
      <div>
        <ContentHeader
          title="About Me"
          subtitle="Sure! Here’s a Lorem Ipsum text with 20 words: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    ),
    reviews: (
      <div>
        <Typography variant="h3">Reviews</Typography>
        <ReviewCard
          {...{
            mentorId: "mentor123",
            userId: "user123",
            rating: 5,
            comment: "Gratementor ",
            createdAt: new Date(),
          }}
        />
      </div>
    ),
    myAvailability: <div>Check Availability</div>, // or embed a calendar view
  },
};
const MemberProfileContent = {
  headerSection: {
    profilePic: "Profile Picture",
    name: "Sarah Chen",
    tagline: "Aspiring Product Manager | Skilled in Data Analysis",
    memberSince: "[Date]",
    engagementLevel: "active_member", // or "New Member"
    lookingFor: "Seeking mentorship in product management",
  } as {
    profilePic: string;
    tagline: string;
    memberSince: Date | string;
    engagementLevel: "active_member" | "new_member";
    lookingFor: string;
    name: string;
  },
  mainBody: {
    journeyAndGoals: {
      primaryGoal: "[My Primary Goal text]",
      currentStatus: "[Current Status]",
      achievements: ["Achievement 1", "Achievement 2"],
    },
    skillsAndInterests: {
      skillsIHave: ["Skill 1", "Skill 2"],
      skillsImDeveloping: ["Developing Skill 1", "Developing Skill 2"],
      topicsImInterestedIn: ["Topic 1", "Topic 2"],
      favoriteTools: ["Tool 1", "Tool 2"],
    },
    communityActivity: {
      joinedGroups: ["Group 1", "Group 2"],
      upcomingEvents: ["Event 1", "Event 2"],
      pastSessions: "[Number of mentorship sessions completed]",
      postsContributed: ["Post Title 1", "Post Title 2"],
      badgesEarned: ["Helpful Mentor", "Active Contributor"],
    },
    socialAndLearning: {
      connectedMentors: ["Mentor 1", "Mentor 2"],
      followers: 120,
      following: 80,
      sharedResources: ["Resource 1", "Resource 2"],
      currentLearningTracks: ["Leadership 101", "Advanced Product Strategy"],
    },
  },
};

const OrganizerProfileContent = {
  headerSection: {
    profilePic: "Profile Picture",
    name: "Marcus Rodriguez",
    hostBadge: "Host Badge 🏠",
    tagline: "Community Builder | Product Lead at Google",
    verified: true,
    memberSatisfication: "98% positive reviews",
  },
  mainBody: {
    myCommunities: [
      {
        groupName: "Group Name",
        groupLogo: "Group Logo",
        memberCount: "1.2k members",
        groupDescription: "Group Description",
        averageRating: "4.8 ★★★★☆",
      },
    ],
    aboutHost: {
      bio: "[Host Bio]",
      mission: "[Why I Started This Group]",
      professionalBackground: {
        currentRole: "[Current Role]",
        company: "[Company]",
        yearsOfExperience: "[X] years of experience",
      },
    },
    hostTrackRecord: {
      totalEventsHosted: "[Number]",
      totalCommunityMembers: "[Sum of all group members]",
      memberTestimonials: [
        {
          quote:
            '"[Organizer Name] runs the most supportive and well-organized community I\'ve ever been part of!"',
          memberName: "- [Member Name]",
        },
      ],
    },
  },
};
const commonProfileContent = {
  mentor: MentorProfileContent,
  organizer: OrganizerProfileContent,
  attendee: MemberProfileContent,
};
/**
 * this components will display all of profile
 */
const DisplayProfile = () => {
  const { id } = useParams();
  const { data: displayProfile, isError: mentorProfileError } =
    useGetMentorProfile(id ? id : "");

  if (mentorProfileError && displayProfile) {
    return null;
  }

  console.log('display', displayProfile);
  const role = "mentor";
  return (
    <StyledDisplayProfileLayout>
      <MentorProfileHeader
        userInfo={commonProfileContent[role].headerSection}
        role={role}
      />
      <MUITabs {...commonProfileContent[role].mainBody} />
    </StyledDisplayProfileLayout>
  );
};

export default DisplayProfile;

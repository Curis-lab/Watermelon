import { Box, styled } from "@mui/material";
import MentorCard from "../../organisms/MentorCard/MentorCard";
import { useNavigate } from "react-router-dom";
import Loading from "../../common/Loading";

interface IMentor {
  _id: string;
  name: string;
  email: string;
  password: string;
  bio: string;
  expertise: string;
  availability: boolean;
  profileImage: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
const StyledCardController = styled("div")(({ theme }) => ({
  display: "grid",
  gap: "15px",
  /**
   * sm: 600px
   */
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  /**
   * md: 960px
   */
  [theme.breakpoints.up("md")]: {
    paddingOutlined: "10px",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  /**
   * lg: 1280px
   */
  [theme.breakpoints.up("lg")]: {
    paddingInline: "20px",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridAutoRows: "370px",
  },
}));


function MentorTemplate({
  mentors,
  isLoading,
}: {
  //this Imentor should be clean
  mentors: IMentor[];
  isLoading: boolean;
}) {
  const navigate = useNavigate();
  return (
    <Box sx={{ minHeight: "100vh", height: "80vh" }}>
      {isLoading ? (
        <Loading/>
      ) : (
        <StyledCardController>
          <>
            {mentors.map((mentor) => (
              <MentorCard
                key={mentor._id}
                {...mentor}
                navigator={(route) => navigate(route)}
              />
            ))}
          </>
        </StyledCardController>
      )}
    </Box>
  );
}

export default MentorTemplate;

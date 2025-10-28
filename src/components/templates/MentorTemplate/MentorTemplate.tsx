import { Box, styled } from "@mui/material";
import MentorCard from "../../organisms/MentorCard/MentorCard";
import { useNavigate } from "react-router-dom";
import { IMentor } from "../../../interfaces/Mentor";
import componentWithLoading from "../../common/componentWithLoading";

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

function MentorList({ mentors }: { mentors: IMentor[] }) {
  const navigate = useNavigate();
  return (
    <StyledCardController>
      <>
        {/* list will display even data is not complete */}
        {mentors.map((mentor) => (
          <MentorCard
            key={mentor._id}
            {...mentor}
            loading={true}
            navigator={(route) => navigate(route)}
          />
        ))}
      </>
    </StyledCardController>
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
      {componentWithLoading(MentorList)({ loading: isLoading, mentors })}
    </Box>
  );
}

export default MentorTemplate;

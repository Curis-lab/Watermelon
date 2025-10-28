import { useMentors } from "../../../hooks/useMentors";
import MentorTemplate from "../../templates/MentorTemplate/MentorTemplate";

const Mentors = () => {
  const { mentors, loading } = useMentors();
  if (!mentors) {
    return null;
  }
  return <MentorTemplate isLoading={loading} mentors={mentors} />;
};

export default Mentors;

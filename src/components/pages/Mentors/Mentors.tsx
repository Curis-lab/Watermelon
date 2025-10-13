import { useMentors } from "../../../hooks/useMentors";
import Retry from "../../common/Retry";
import MentorTemplate from "../../templates/MentorTemplate/MentorTemplate";

const Mentors = () => {
  const { mentors, isLoading, error, refetch , status} = useMentors();


  if(status==="pending") return <div>...pending</div>
  if (status==="error") {
    <Retry error={error} refetch={refetch} />;
  }

  return <MentorTemplate isLoading={isLoading} mentors={mentors} />;
};

export default Mentors;

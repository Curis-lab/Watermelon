import { useMentors } from "../../../hooks/useMentors";
import Retry from "../../common/Retry";
import MentorTemplate from "../../templates/MentorTemplate/MentorTemplate";

const Mentors = () => {
  const { mentors, loading,error, status} = useMentors();


  if(status==="pending") return <div>...pending</div>
  if (status==="error") {
    <Retry error={error} refetch={()=>{}} />;
  }

  return <MentorTemplate isLoading={loading} mentors={mentors} />;
};

export default Mentors;

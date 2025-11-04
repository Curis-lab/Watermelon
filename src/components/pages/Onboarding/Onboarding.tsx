import OnboardingTemplate, { IBaseFormRegister } from "../../templates/OnboardingTemplate/OnboardingTemplate";
import { useRegister } from "../../../hooks/api/actions/useRegister/userRegister";

const Onboarding = () => {
  const mutation = useRegister();
  const processHandle = (data:IBaseFormRegister) => {
    mutation.mutate(data);
  };
  return <OnboardingTemplate processHandler={processHandle} />;
};

export default Onboarding;

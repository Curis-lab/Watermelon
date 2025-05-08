import ProfileInfo from "../../molecules/ProfileInfo";
import SocialLink from "../../molecules/SocialLinks";
import MUITabs from "../../atoms/Tap/Tap";


const ProfileHeader = () => {


  return (
    <div>
      <ProfileInfo />
      <SocialLink />
      <MUITabs/>
    </div>
  );
};

export default ProfileHeader;

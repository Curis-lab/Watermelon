import ProfileInfo from "../../molecules/ProfileInfo";
import SocialLink from "../../molecules/SocialLinks";
import MUITabs from "../../atoms/Tap/Tap";

export interface IProfileHeader{
  name:string;
  imageUrl:string;
  expertise: string;
}
const ProfileHeader = ({header}:{header: IProfileHeader}) => {


  return (
    <div>
      <ProfileInfo info={header} />
      <SocialLink />
      <MUITabs/>
    </div>
  );
};

export default ProfileHeader;

import ProfileInfo from "../../molecules/ProfileInfo";
import SocialLink from "../../molecules/SocialLinks";

export interface IProfileHeader {
  name: string;
  imageUrl: string;
  expertise: string;
}
const ProfileHeader = ({ header }: { header: IProfileHeader }) => {
  return (
    <div>
      <ProfileInfo info={header} />
      <SocialLink />
    </div>
  );
};

export default ProfileHeader;

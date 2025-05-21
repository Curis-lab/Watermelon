import ProfileHeader, { IProfileHeader } from "../../organisms/ProfileHeader/ProfileHeader";

interface IProfilePageLayout{
  header: IProfileHeader
}

const ProfilePageLayout = ({header}:IProfilePageLayout) => {
  return (
    <div>
      ProfilePageLayout
      <ProfileHeader header={header} />
    </div>
  );
};

export default ProfilePageLayout;

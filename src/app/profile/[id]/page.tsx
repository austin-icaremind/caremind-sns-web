import ProfileView from "@/view/profile/ProfileView";

interface pageProps {
  params: { id: number };
}

const Profile: React.FC<pageProps> = ({ params }) => {
  return <ProfileView id={params.id} />;
};

export default Profile;

import ProfileView from "@/view/profile/ProfileView";

interface pageProps {
  params: { id: number };
}

const Profile: React.FC<pageProps> = ({ params }) => {
  // return <ProfileView id={params.id} />;
  return <div>id는 {params.id}</div>;
};

export default Profile;

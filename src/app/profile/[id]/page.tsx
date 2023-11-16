import ProfileView from "@/view/profile/components/ProfileView";
import { NextPage } from "next";

interface pageProps {
  params: { id: number };
}

const Profile: NextPage<pageProps> = ({ params }) => {
  // const name = async getName(parmas.id)

  return <ProfileView id={params.id} />;
};

export default Profile;

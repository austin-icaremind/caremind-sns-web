import { NextPage } from "next";
import DetailsViewLayout from "@/view/components/DetailsViewLayout";
import DetailsProjectsView from "@/view/details/projects/DetailsProjectsView";
interface pageProps {
  params: { id: number };
}

const DetailsProjects: NextPage<pageProps> = ({ params }) => {
  return <DetailsProjectsView id={params.id} />;
};

export default DetailsProjects;

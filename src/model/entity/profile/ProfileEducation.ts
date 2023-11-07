import { Profile } from "./Profile";
import { Data } from "./Data";
import { ProfileEducationInterface } from "./ProfileEducationInterface";

export class ProfileEducation
  extends Profile
  implements ProfileEducationInterface
{
  message: string;
  category: string;
  data: Data[];
  constructor(id: number, message: string, category: string, data: Data[]) {
    super(id);
    this.message = message;
    this.category = category;
    this.data = data;
  }
}

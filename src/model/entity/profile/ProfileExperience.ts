import { Profile } from "./Profile";
import { Data } from "./Data";
import { ProfileExperienceInterface } from "./ProfileExperienceInterface";

export class ProfileExperience
  extends Profile
  implements ProfileExperienceInterface
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

import { ProfileInterface } from "./ProfileInterface";
import { Profile } from "./Profile";
import { Data } from "./Data";

export class ProfileExperience extends Profile implements ProfileInterface {
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

import { Profile } from "./Profile";

export class ProfileByImage
  extends Profilev
  implements ProfileByImageInterface
{
  profileImage: string;
  constructor(id: number, profileImage: string) {
    super(id);
    this.profileImage = profileImage;
  }
}

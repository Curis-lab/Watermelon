import { TRoles } from "../types/role";

export interface IMentor {
  _id: string;
  name: string;
  email: string;
  password: string;
  bio: string;
  expertise: string;
  availability: boolean;
  profileImage: string;
  role: TRoles;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

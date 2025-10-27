import { TRoles } from "../types/role";

interface OnboardingFormData {
  name: string;
  email: string;
  password: string;
  role: TRoles;
  bio: string;
  availability: boolean;
  expertise: string;
}
interface EventFormData {
  name: string;
  description: string;
  date: Date;
  location: string;
}
export const createFormData = (
  formData: OnboardingFormData | EventFormData | undefined,
  imageFile: File | null
) => {
  const data = new FormData();

  if (imageFile) {
    data.append("image", imageFile as Blob);
  }

  if (formData) {
    Object.getOwnPropertyNames(formData).map((name) => {
      data.append(name, formData[name as keyof typeof formData]);
    });
  }

  return data;
};

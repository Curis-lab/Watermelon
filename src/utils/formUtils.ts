interface OnboardingFormData {
  name: string;
  email: string;
  password: string;
  role: string;
  bio: string;
  availability: boolean;
  expertise: string;
}
interface EventFormData {
    name:string;
    description:string;
    date: Date;
    location:string;
}
export const createFormData = (
  formData: OnboardingFormData | EventFormData| undefined,
  imageFile: File | null
) => {
  const data = new FormData();

  data.append("image", imageFile as Blob);
  Object.getOwnPropertyNames(formData).map((name) => {
    data.append(name, formData[name]);
  });

  return data;
};

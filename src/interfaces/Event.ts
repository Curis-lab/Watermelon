interface ISmallProfile {
  id: string;
  name: string;
  profileImage: string;
}

export interface IEvent {
  name: string;
  description: string;
  date: Date | string;
  location: string;
  imageUrl: string;
  hostedBy?: ISmallProfile;
  id?: string;
  attendees?: string[];
}

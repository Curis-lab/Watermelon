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

export interface IEventAPIAcceptor {
  title: string;
  description: string;
  date: Date;
  endDate?: Date;
  location: string;
  address:string;
  organizerId: string;
  status: "draft" | "upcoming" | "completed" | "cancelled";
  image?: string;
  capacity: number;
  isPublic: boolean;
  price: number;
  tags:string[]
}

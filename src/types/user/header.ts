interface IUser{
    name:string;
    email:string;
    profileImage:string;
    bio:string;
    expertise:string;
    availability:boolean;
    role: "mentor"|"attendee"|"organizer"|"mentee";
    
}

export interface IProfileHeader {
  name: string;
  imageUrl: string;
  expertise: string;
}


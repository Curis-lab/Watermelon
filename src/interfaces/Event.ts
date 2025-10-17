export interface IEvent {
  name: string;
  description:string;
  date:Date|string;
  location:string;
  imageUrl:string;
  hostedBy: {
    id:string;
    name:string;
    profileImage:string;
  }
}

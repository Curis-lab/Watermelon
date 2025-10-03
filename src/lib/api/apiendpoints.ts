const API_ENDPOINTS = {
  events: {
    getAll: "/event",
    getById: (id: string) => `/event/${id}`,
  },
  mentors: {
    getAll: "/mentor",
    getProfileById: (id:string)=>`/mentor/${id}`
  },
  reviews:{
    getAll: '/review'
  }
};
export default API_ENDPOINTS;

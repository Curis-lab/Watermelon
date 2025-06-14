const API_ENDPOINTS = {
    events:{
        getAll: '/event',
        getById: (id:string)=>`/event/${id}`
    }
};
export default API_ENDPOINTS;
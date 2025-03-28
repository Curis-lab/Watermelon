import useApi from "../useApi/useApi"


const ENDPOINTS = '/authentication';
interface User{
    name:string;
    email:string;
    password:string;
}
export const useEventApi = (user: User)=>{
    const {createRequest} = useApi();
    const addUser = ()=>{
        const requestId = 'addUser';
        const req = createRequest(ENDPOINTS,{
            method: 'POST',
            body: JSON.stringify(user)
        },
    requestId);
    
    }
    return {
        addUser,
        getEventById:'',
        createEvent:'',
        updateEvent:'',
        deleteEvent:''
    }
}
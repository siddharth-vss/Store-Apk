import { SP } from "../utils";

const Users = async ()=>{
    const data = await SP.get('/user');
    return data.data;
} 


import { SP } from "../utils";


interface Credentials {
    text : string;
    password : string;
}

const Users = async ()=>{
    const data = await SP.get('/user');
    return data.data;
} 

const Login = async (credentials : Credentials)=>{
    const data = await SP.post('/user/login',credentials)
    return data.data;
}

export const UserServices = {
    Users,Login,
}

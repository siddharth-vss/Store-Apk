import { SP } from "../utils";

const Items = async ()=>{
    const data = await SP.get('/item');
    return data.data;
} 

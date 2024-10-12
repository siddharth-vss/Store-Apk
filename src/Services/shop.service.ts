import { SP } from "../utils";

const Shops = async ()=>{
    const data = await SP.get('/shop');
    return data.data;
} 

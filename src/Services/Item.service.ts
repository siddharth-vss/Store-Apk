import { SP } from "../utils";

const Items = async ()=>{
    const data = (await SP.get('/item/shop/66f2b588e93de4c964e76b5d')).data;
    return data;
} 


export const ItemServices = {
    Items,
}
import { SP } from "../utils";

const Storages = async ()=>{
    const data = await SP.get('/storage');
    return data.data;
} 

export const StorageServices = {
    Storages,
}

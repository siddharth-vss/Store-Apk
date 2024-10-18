import {Interface, SP} from '../utils';

const Shops = async () => {
  const data = await SP.get('/shop');
  return data.data;
};

const CreateInvoice = async (invoice : Interface.Invoice) => {
  const data = await SP.post('/invoice', invoice);
  return data.data;
};
const GetAllInvoice = async () => {
  const data = await SP.get(`/invoice/shop/66f2b588e93de4c964e76b5d`);
  return data.data;
};

export const ShopServices = {
  Shops,CreateInvoice,GetAllInvoice
};

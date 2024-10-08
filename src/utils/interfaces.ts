interface mongo {
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface User extends mongo {
  name: string;
  email: string;
  pic: string;
  role: string;
  mobile: string;
}

export interface Shop extends mongo {
    name : string;
    email: string;
    mobile: string;
    pic: string;
}

export interface role {
  user: User[];
  admin: User[];
  owner: User[];
}

export interface storage extends mongo{
  name : string ;
  owner : string ;
  shop : Shop;
  manager : string[];
}

export interface Item extends mongo{
  name : string ;
  description : string ;
  category : string ;
  pic : string ;
  price : number ;
  quantity : number ;
  storage : storage ;
  shop : Shop ;
}


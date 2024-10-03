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

export interface role {
  user: User[];
  admin: User[];
  owner: User[];
}

export interface storage extends mongo{
  name : string ;
  owner : string ;
  shop : string;
  manager : string[];
}
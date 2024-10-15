import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import customAsyncStorage from './customAsyncStorage'; // Custom AsyncStorage wrapper
import { Interface } from '../utils';

// Define the state type
interface CounterState {
  token: string;
  user :{
    _id: string;
    name: string;
    email: string;
    pic: string;
    mobile: string;
    role: string;
  };

  store: (action: any) => void;
  setUser: (user: Interface.User) => void;
}
type MyPersist = (
  config: StateCreator<CounterState>,
  options: PersistOptions<CounterState>
) => StateCreator<CounterState>;

const useAuthStore = create<CounterState>(
  (persist as MyPersist)(
    (set) => ({
      token: "",
      user: {
        _id: '',
        name: '',
        email: '',
        role: '',
        mobile: '',
        pic: '',
      },
      store: (action: any) => console.log(action, " SIdd"),
      setUser: (user) => set((state) => ({
        ...state,
        user :{

          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          pic: user.pic,
          mobile: user.mobile
        },
        })),

      // getUser: () =>{
      //   console.log();
      // },
    }),
    {
      name: 'Auth-storage', // Unique name for the storage
      storage: customAsyncStorage, // Use the custom AsyncStorage wrapper
    }
  )
);

export default useAuthStore;

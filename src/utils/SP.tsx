import axios from "axios";

 const sp = axios.create({
    baseURL: 'https://shopapk.onrender.com',
    // headers: {
    //   Authorization: `Bearer ${state.token}`,
    // },
  });
  // response interceptor
  sp.interceptors.request.use(
    (config) => {
    //   config.headers['Authorization'] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // response interceptor
  sp.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // console.log(error.response);
      if (error.response.status === 401) {
        console.error("ERROR",error);
        // logoutUser();
      }
      return Promise.reject(error);
    }
  );

  export default sp;
import axios from 'axios';

// INSTANCES -----------------
// In case if you want one request configuration for one API 
// and other configuartion for others API's 
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
instance.defaults.headers.common['AUTHENTICATION'] = 'AUTH_TOKEN_FROM_INSTANCE';

// INSTANCE INTERCEPTORS
// Request Interceptor in AXIOS i.e. getting track on every child API's
instance.interceptors.request.use(
    request => {
        console.log('[Instance Interceptor request]:', request);
        return request;
    }, error => {
        console.error(error);
        return Promise.reject(error);
    }
)

// Response Interceptor in AXIOS i.e. getting track on every child API's
instance.interceptors.response.use(
    response => {
        console.log('[Instance Interceptor response]:', response);
        return response;
    }, error => {
        console.log(error);
        return Promise.reject(error);
    }
);


export default instance;
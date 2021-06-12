import {create} from 'apisauce';
import {API_URL} from '../constant';
let HEADERS = {
  Accept: 'application/json',
  'Cache-Control': 'no-cache',
  'Content-Type': 'application/json;charset=utf-8',
};

const apiGlobal = create({
  headers: HEADERS,
  timeout: 300000,
});

const setToken = token => {
  HEADERS = {...HEADERS, Authorization: `Bearer ${token}`};
};

const baseAPI = {
  get: async (endpoint, params) => {
    apiGlobal.setHeader(HEADERS);
    return apiGlobal.get(endpoint, params).then(res => handleResponse(res));
  },

  post: async (endpoint, params) => {
    apiGlobal.setBaseURL(API_URL);
    apiGlobal.setHeader(HEADERS);

    return apiGlobal.post(endpoint, params).then(res => {
      return handleResponse(res);
    });
  },
};

const handleResponse = response =>
  new Promise((resolve, reject) => {
    console.log('response server ', response);
    const status = response.status;

    // xử lý case token hết hạn
    if (status === 401) {
      // LOGOUT
      alert('GOI FUNCTION LOGOIT');
    }

    // xử lý case thành công
    if (status >= 200 && status <= 300) {
      resolve(response.data);
    }

    //xử lý case lỗi
    reject(response);
  });

export {baseAPI, setToken};

export const API_BASE_URL = "http://localhost:1337/api/"; //"https://dreamfactory.technisupport.com/api/v2";

export const AXIOS_CONF_PUBLIC = {
  baseURL: API_BASE_URL
};


export const AXIOS_CONF = {
    baseURL: API_BASE_URL,
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("session_token"),
    },
};


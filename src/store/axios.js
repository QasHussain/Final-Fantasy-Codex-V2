import axios from "axios";

//Base url to make requests the moogleapi:
const instance = axios.create({
  baseURL: "https://www.moogleapi.com/api/",
});

export default instance;

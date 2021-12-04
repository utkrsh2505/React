import axios from "axios";
const FetchUser = ()=>{

    return axios.get("http://localhost:3001/Todo");

}
export {FetchUser};
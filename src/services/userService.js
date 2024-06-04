
import {postRequest} from "../utils/ajax";

export const login=(request,callback)=> {
    const url="http://localhost:8080/login?username="+request.username+"&password="+request.password;
    postRequest(url,{},callback);
}

export const getUser=(userId,callback)=>{
    const url="http://localhost:8080/getUser?userId="+userId;
    postRequest(url, {},callback);
}
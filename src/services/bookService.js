import {postRequest} from "../utils/ajax";

export const getBook=(bookId,callback)=>{
    const url="http://localhost:8080/getBook?bookId=" + bookId;
    postRequest(url,{},callback);
}

export const getAllBook=(callback)=>{
    const url="http://localhost:8080/getAllBooks";
    postRequest(url,{},callback);
}
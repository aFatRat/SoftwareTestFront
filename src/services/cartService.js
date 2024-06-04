import {postRequest} from "../utils/ajax";

export const getCart=(userId,callback)=>{
    const url="http://localhost:8080/getCart?userId="+userId;
    postRequest(url,{},callback);
}

export const addBook=(userId,bookId,callback)=>{
    const url="http://localhost:8080/addBookToCart?userId="+userId+"&bookId="+bookId;
    postRequest(url,{},callback);
}

export const removeBook=(userId,bookId,callback)=>{
    const url="http://localhost:8080/removeBookinCart?userId="+userId+"&bookId="+bookId;
    postRequest(url,{},callback);
}

export const buyAll=(userId,data,callback)=>{
    const url="http://localhost:8080/addOrder?userId="+userId;
    postRequest(url,data,callback);
}
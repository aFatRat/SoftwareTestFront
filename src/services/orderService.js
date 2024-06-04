import {postRequest} from "../utils/ajax";

export const getAllOrders=(userId,callback)=>{
    const url="http://localhost:8080/getAllOrders?userId="+userId;
    postRequest(url,{},callback);
}

export const getOrder=(userId,orderId,callback)=>{
    const url="http://localhost:8080/getOrder?userId="+userId+"&orderId="+orderId;
    postRequest(url,{},callback);
}
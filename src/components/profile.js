import React, {useState} from "react";
import {Button, Descriptions} from "antd";
import {useParams} from "react-router";
import {getUser} from "../services/userService";
export function Profile(){
    const userId=useParams().userId;
    let [state,setState]=useState({
        user:null,
    });
    if(state.user===null){
        getUser(userId,(data)=>{
            setState({
                user: data,
            })
        })
    }

    console.log("profile:",state.user);
    return (
        (state.user)?
        <div>
            <Descriptions title="User Info" bordered>
                <Descriptions.Item label="UserName" span={1}>{state.user.name}</Descriptions.Item>
                {/*<Descriptions.Item label="E-mail" span={2}>{state.user.email}</Descriptions.Item>*/}
                <Descriptions.Item label="Address" span={3}>
                    ShangHai JiaoTong University
                </Descriptions.Item>
                <Descriptions.Item label="Description" span={3}>{state.user.description}</Descriptions.Item>
                {/*<Descriptions.Item label="Icon">*/}
                {/*    <img src={user.avatar} alt={" "}/>*/}
                {/*</Descriptions.Item>*/}

            </Descriptions>
            <Button>Edit</Button>
        </div>:
            <h1>
                waiting
            </h1>

    )
}
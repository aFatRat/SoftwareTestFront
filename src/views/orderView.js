import {Button, Result} from "antd";
import {useParams} from "react-router";
import {useState} from "react";
import {Navigate} from "react-router-dom";
import {getOrder} from "../services/orderService";

export function OrderView() {
    const orderNumber = useParams().orderNumber;

    let [state, setState] = useState({
        order: null,
        flag_order: false,
        flag_goHome: false,
        flag_buyAgain: false,
    });

    if (!state.flag_order) {
        getOrder(sessionStorage.getItem("bookstore login"), orderNumber, (data) => {
            console.log("ooo",data);
            setState({
                order: data,
                flag_order: true,
            });
        })
    }

    return (
        (state.flag_goHome) ?
            <Navigate to="/home"/> :

            (state.flag_buyAgain) ?
                <Navigate to="/cart"/> :

                (state.order===null) ?
                    <h1>Waiting...</h1> :
                    <Result
                        status="success"
                        title={"Successfully Purchased !"}
                        subTitle={"Price:" + state.order.price + "\nDate:" + state.order.time + "\nOrder number:" + state.order.orderId + " \nCloud server configuration takes 1-5 minutes, please wait."}
                        extra={[
                            <Button
                                type="primary"
                                key="console"
                                onClick={() => {
                                    setState({
                                        flag_goHome: true,
                                    })
                                }
                                }
                            >
                                Go home
                            </Button>,
                            <Button
                                key="buy"
                                onClick={()=>{
                                    setState({
                                        flag_buyAgain: true,
                                    })
                                }
                                }
                            >Buy Again</Button>,
                        ]}
                    />
    )
}
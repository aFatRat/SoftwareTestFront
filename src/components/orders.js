import {useState} from "react";
import {useParams} from "react-router";
import {Button, Col, Collapse, Image, Menu, Row} from "antd";
import {getAllOrders} from "../services/orderService";

const {Panel} = Collapse;

export function Orders() {
    const userId = useParams().userId;
    const [state, setState] = useState({
        orders: [],
        flag: false,
    });

    if (!state.flag) {
        getAllOrders(userId, (data) => {
            console.log("data", data);
            setState({
                orders: data,
                flag: true,
            })
        })
    }

    console.log("orders",state.orders);
    return (
        <ul>
            {
                state.orders.map((item, index) => {
                        console.log("item", item);
                        return (
                            <Collapse>
                                <Panel
                                    header={
                                    <div>
                                        <div style={{float: "left", verticalAlign: "middle",}}>
                                            <p>{"订单号：" + item.orderId}</p>
                                            <p>{"购买时间：" + item.time}</p>
                                        </div>
                                        <div style={{float: "right", verticalAlign: "middle"}}>
                                            <p>{"价格：￥" + item.price}</p>
                                        </div>
                                    </div>}
                                    key={index}
                                    style={{
                                        textAlign: "left",
                                    }}
                                >
                                    {
                                        item.orderItemSet.map((item_,index)=> (<div>
                                            <div>
                                                <p style={{textAlign: "left",}}>{"书籍名称：" + item_.name}</p>
                                                <p style={{textAlign: "left",}}>{"数量：" + item_.number}</p>
                                            </div>

                                            </div>))

                                    }
                                </Panel>
                            </Collapse>)
                    }
                )
            }
        </ul>
    )
}
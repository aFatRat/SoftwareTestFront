import React from "react";
import {Avatar, Button, Checkbox, List, Statistic} from "antd";

import {Link, Navigate, redirect} from "react-router-dom";
import {buyAll, getCart, removeBook} from "../services/cartService";
import {getBook} from "../services/bookService";
export class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order: false,
            cart: [],
            book:[],
            checked:[],
            userId: sessionStorage.getItem("bookstore login"),
            orderNumber: null,
        }
    }

    componentDidMount() {
        getCart(this.state.userId, (data) => {
            let array=[];
let books=[];
            for(let x in data){
                array.push(false);
                getBook(data[x].bookId,(data0)=>{
                    data[x].book=data0;
                    books.push(data0);
                })
            }
            this.setState({
                cart: data,
                book:books,
                checked:array,
            })
        })
    }

    buyBook(){

    }
    buyAll=()=>{
        let order={
            userId: this.state.userId,
            orderItemSet:[],
        }
        for(let x in this.state.checked){
            if(this.state.checked[x]===true){
                let tmp={
                    bookId:null,
                    number:null,
                };
                tmp.bookId=this.state.cart[x].book.id;
                tmp.number=this.state.cart[x].number;
                order.orderItemSet.push(tmp);
            }
        }

        buyAll(this.state.userId,order,(data)=>{
            console.log(data);
            this.setState({
                order:true,
                orderNumber:data.orderId,
            })
        })
    }

    render() {

        console.log(this.state);
        return (
            (this.state.order) ?
                <Navigate to={`/order/${this.state.orderNumber}`}/> :
                (this.state.cart.length === 0) ?
                    <h1>No books in cart.</h1> :
                    <div>
                        <List
                            itemLayout="horizontal"
                            dataSource={this.state.cart}
                            header={<div style={{
                                textAlign: "left"
                            }}>Cart:</div>}
                            renderItem={(item, index) => (
                                <Checkbox
                                    defaultChecked={this.state.checked[index]}
                                    onChange={(e)=>{
                                        console.log(item);
                                    (e.target.checked===true)?
                                        this.state.checked[index]=true:
                                        this.state.checked[index]=false;
                                    console.log(this.state.checked);
                                }
                                }>

                                    <List.Item>
                                        {
                                            this.state.book[index]?
                                                <h1>wait</h1>:
                                                <List.Item.Meta
                                                    style={{
                                                        width: 720,
                                                    }}
                                                    // avatar={
                                                    //     <img src={this.state.book[index].avatar} style={{
                                                    //         width: 60,
                                                    //         height: 80
                                                    //     }}/>
                                                    // }
                                                    // title={this.state.book[index].name}
                                                    // description={this.state.book[index].description}
                                                >
                                                </List.Item.Meta>

                                        }

                                        <Statistic
                                            title={"Number:"}
                                            value={item.number}/>
                                        <Button
                                            onClick={()=>{
                                                alert(JSON.stringify(this.state.book[index]));
                                            }
                                            }>

                                        </Button>
                                        {/*<Button*/}
                                        {/*    name={index}*/}
                                        {/*    onClick={(index) => {*/}
                                        {/*        // buyBook(this.state.userId, item.book.bookId, (data) => {*/}
                                        {/*        //     console.log(data);*/}
                                        {/*        //     const price = data.price;*/}
                                        {/*        //     const date = data.time;*/}
                                        {/*        //     const book = data.book;*/}
                                        {/*        //     const orderNumber = data.orderNumber;*/}
                                        {/*        //     alert("订单信息：\n价格：" + price + "\n时间：" + date + "\n书籍名称：" + book.name + "\n订单号：" + orderNumber);*/}
                                        {/*        //     this.setState({*/}
                                        {/*        //         order: true,*/}
                                        {/*        //         orderNumber: orderNumber,*/}
                                        {/*        //     })*/}
                                        {/*        // })*/}
                                        {/*    }*/}
                                        {/*    }*/}
                                        {/*>*/}
                                        {/*    Buy!*/}
                                        {/*</Button>*/}
                                        {/*<Button*/}
                                        {/*    name={index}*/}
                                        {/*    onClick={(index) => {*/}
                                        {/*        removeBook(this.state.userId, item.book.id, (data) => {*/}
                                        {/*            console.log(data);*/}
                                        {/*            let newChecked=this.state.checked;*/}
                                        {/*            newChecked.splice(index,1);*/}
                                        {/*            console.log("new",newChecked);*/}
                                        {/*            this.setState({*/}
                                        {/*                cart: data,*/}
                                        {/*                checked:newChecked,*/}
                                        {/*            })*/}
                                        {/*        })*/}
                                        {/*    }*/}
                                        {/*    }*/}
                                        {/*>Delete</Button>*/}
                                    </List.Item>
                                </Checkbox>
                            )}
                        />
                        <Button
                            onClick={this.buyAll}>
                            Buy all!
                        </Button>
                    </div>

        )
    }


}
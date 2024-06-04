import React, {useState} from "react";
import {Badge, Button, Descriptions} from "antd";
import {useParams} from "react-router";
import {getBook} from "../services/bookService";
import {addBook} from "../services/cartService";

export function BookDetail() {
    let bookId = useParams().bookId;

    let [state,setState]=useState({
        book:null,
    })

    if(state.book===null){
        getBook(bookId,(data)=>{
        console.log(data);
            setState({
                book:data,
            })
        });
    }


    return (
        (state.book)?
        <div>
            <Descriptions title="Book Detail" bordered>
                <Descriptions.Item label="avatar" span={3}>
                    <img alt="Book" src={state.book.avatar} style={{height:240,width:160}}/>
                </Descriptions.Item>
                <Descriptions.Item label="name">{state.book.name}</Descriptions.Item>
                <Descriptions.Item label="author">{state.book.author}</Descriptions.Item>
                <Descriptions.Item label="date">
                    <h1>{state.book.date[0]}/{state.book.date[1]}/{state.book.date[2]}</h1>
                </Descriptions.Item>

                <Descriptions.Item label="selling state" span={3}>
                    <Badge status="processing" text="selling"/>
                </Descriptions.Item>
                <Descriptions.Item label="description">{state.book.description}</Descriptions.Item>
            </Descriptions>
            <Button
                name="addBook"
                onClick={() => {
                    // let cart_ = JSON.parse(sessionStorage.getItem("cart"));
                    // if (cart_ == null)
                    //     cart_ = [];
                    // cart_.push(bookId);
                    // sessionStorage.removeItem("cart");
                    // sessionStorage.setItem("cart", JSON.stringify(cart_));

                    addBook(sessionStorage.getItem("bookstore login"),bookId,()=>{
                        // console.log("add a book,the id is:",bookId);
                    })
                }
                }
            >
                Add to cart!
            </Button>
        </div>:
            <h1>Waiting!</h1>

    )


}
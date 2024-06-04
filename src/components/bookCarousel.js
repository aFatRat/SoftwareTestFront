import React from "react";
import {Carousel} from "antd";
import {Link} from "react-router-dom";
 import "../assets/book1_cxsj.jpg"
import "../assets/book2_st.jpg"
export class BookCarousel extends React.Component{

    render() {
        return(
            (this.props.book.length===0) ?
                <Carousel>
                    <h1>Waiting!</h1>
                </Carousel>:
                <Carousel
                    autoplay
                >
                    {
                        this.props.book.map((item,index)=>{
                            return (
                                <Link to={`/bookDetail/${this.props.book[index].id}`}>
                                    <img
                                        src={this.props.book[index].avatar}
                                        alt={this.props.book[index].name}
                                        style={{
                                            height:240,
                                            width:180,
                                        }}
                                    />
                                </Link>
                            )
                        })
                    }
                </Carousel>

        )
    }
}
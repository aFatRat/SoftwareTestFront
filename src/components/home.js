import React from "react";
import {BookCarousel} from "./bookCarousel";
import {useLoaderData} from "react-router";
import {BookList} from "./bookList";
import {Navigate} from "react-router-dom";
import {getAllBook} from "../services/bookService";

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            id: sessionStorage.getItem("bookstore login"),
        }
    }

    componentDidMount() {
        getAllBook((data) => {
            this.setState({
                books:data,
            });
        });
    }

    // console.log(id);


    render() {
        return (
            (this.state.id) ?
                <div>
                    <BookCarousel book={this.state.books}/>
                    <BookList book={this.state.books}/>
                </div>
                :
                <Navigate to="/login"/>
        )
    }


}
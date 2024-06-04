import React from "react";
import {List} from "antd";
import {BookCard} from "./bookCard";
export class BookList extends React.Component{

    // constructor(props) {
    //     super(props);
    // }

    // componentDidMount() {
    //     this.setState({books: this.props.book})
    // }

    render() {
        return (
            <List
                grid={{gutter: 10, column: 4}}
                dataSource={this.props.book}
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 16,
                }}

                renderItem={item => (
                    // console.log("item",item)
                    <List.Item>
                        <BookCard book={item} />
                    </List.Item>
                )}
            />
        );
    }

}
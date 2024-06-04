import {NavLink} from "react-router-dom";
import {Card} from "antd";
import Meta from "antd/es/card/Meta";

export function BookCard(props){
    return(
        <NavLink to={`/bookDetail/${props.book.id}`}>
            <Card
                hoverable
                style={{
                    width: 240,
                    height:400,
                }}
                cover={<img alt="example" src={props.book.avatar} style={{width:240,height:320}}/>}
            >
                <Meta title={props.book.name} description={"￥"+props.book.price} />
            </Card>
        </NavLink>

    )
}
import {Link} from "react-router-dom";
import {Menu} from "antd";

export function SideBar(props) {
    return (
        (props.user)?

        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{height: '100%', borderRight: 0}}
        >
           <Menu.Item >
               <Link to="/home">主页</Link>
           </Menu.Item>
            <Menu.Item >
                <Link to="/cart">购物车</Link>
            </Menu.Item>
            <Menu.Item >
                <Link to={`/orders/${props.user.id}`}>全部订单</Link>
            </Menu.Item>
            <Menu.Item >
                <Link to={`/profile/${props.user.id}`}>个人信息</Link>
            </Menu.Item>
        </Menu>:
            <h1>wait</h1>
    )
}
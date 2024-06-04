import {Button, Col, Row} from "antd";
import logo from "../assets/logo192.png"
import "../assets/user_jerry.jpg"
import {NavLink} from "react-router-dom";
import {getUser} from "../services/userService";
import {useEffect, useState} from "react";

export function HeaderInfo() {
    let userId = sessionStorage.getItem("bookstore login");
    let [state, setState] = useState({
        user: null,
    })
    if (state.user===null) {
        getUser(userId, (data) => {
            setState({
                user: data,
            })
        })
    }

    const onClick = () => {
        if (!state.user) return;

        setState({
            user: null,
        })
        alert("Log out");
        sessionStorage.clear();
        window.location.reload();
    }
    return (
        (state.user)?
        <div id="header">
            <div id="header-content">
                <Row align="middle">
                    <Col xs={16} sm={12} md={10} lg={8} xl={4} xxl={2}>
                        <img alt="logo" className="logo" src={logo} style={{verticalAlign: "middle", height: 45}}/>
                    </Col>
                    <Col xs={6} sm={10} md={12} lg={14} xl={18} xxl={20}>
                        <NavLink to={`profile/${state.user.id}`}>
                            <img alt="avatar" src={state.user.icon}
                                 style={{verticalAlign: "middle", height: 50, width: 50}}/>
                        </NavLink>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                        <Button style={{verticalAlign: "middle"}} onClick={onClick}>退出登录</Button>
                    </Col>
                </Row>
            </div>
        </div>:
            <h1>
                waiting
            </h1>
    );
}
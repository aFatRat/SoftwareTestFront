import React from "react";
import {Layout} from "antd";
import {HeaderInfo} from "../components/headerInfo";
import {SideBar} from "../components/sideBar";
import {Outlet, useParams} from "react-router";
import {Navigate} from "react-router-dom";
import {getUser} from "../services/userService";
import {getAllBook} from "../services/bookService";
const {Header,Content,Sider}=Layout;
export class HomeView extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            user:null,
            books:null,
        };
    }

    componentDidMount() {
        getAllBook((data)=>{
            // console.log("aaa",data);
            this.setState({
                books:data,
            })
        });
        getUser(sessionStorage.getItem("bookstore login"),(data)=>{
            // console.log("aaa",data);
            this.setState({
                user:data,
            })
        })
    }

    render() {
        const string=sessionStorage.getItem("bookstore login");
     return(
         (string)?
             <Layout id='root' >
                 <Header>
                     <HeaderInfo id="headerInfo" />
                 </Header>
                 <Layout>
                     <Sider
                         theme="light"
                     >
                         <SideBar
                             id="sideBar"
                             user={this.state.user}
                         />
                     </Sider>
                     <Content>
                         <Outlet books={this.state.books}/>
                     </Content>
                 </Layout>
             </Layout>:<Navigate to="/login"/>
     )
 }


}
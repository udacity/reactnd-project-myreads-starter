import {Layout} from 'antd';
import React, {Component} from "react";
import 'antd/dist/antd.css';

const {Header} = Layout;

class HeaderComponent extends Component {

    render() {
        return (
            <Header id="components-layout-demo">
                <div className="logo"/>
            </Header>
        );
    }
}

export default HeaderComponent
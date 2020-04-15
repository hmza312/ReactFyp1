import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Input } from 'antd';
import logo from './logo.png';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './layout.css'
import {
      BrowserRouter as Router,
      Switch,
      Route,
      Link
    } from "react-router-dom";
import Category from '../Component/category';
import { Row, Col, Divider } from 'antd';
const { Header, Content, Footer } = Layout;




const CustomLayout = (props) => { 
  return(
    
  <Layout className="layout" breakpoint="xxl"
    >
         <Header className="logo">
            
    <Row >
      <Col className="gutter-row" span={14}>
        <div >
        <img src={logo}  width="230px" height="64px" style={{float:'left'}} />
        </div>
      </Col>
      <Col className="gutter-row" span={5}>
        <div >
      
        </div>
      </Col>
      <Col className="gutter-row" span={5}>
        <div > 
        <Avatar size="large" icon={<UserOutlined />} />
         <Button type="primary" style={{marginLeft:'3%', borderRadius:'30px'}}>
         Sign In
        </Button></div>
      </Col>
      
    </Row>
    </Header>
    <Row >
      <Col className="gutter-row" span={24}>
        <div  style={{backgroundColor: '#DCDCDC'}}>
        <nav>
        
        <ul>
          {/* <li><Icon  size={18} icon={home}  style={{ backgroundColor: 'white',}}/></li> */}
           <li> <Link to="/Products" className="active">Product Store</Link></li>
            {/* <li><Icon  size={18} icon={envelopeO}  style={{ backgroundColor: 'white',}}/></li> */}
            <li> <Link to="/cropprediction">Crop Prediction</Link> </li>
            {/* <li><Icon  size={18} icon={envelopeO}  style={{ backgroundColor: 'white',}}/></li> */}
            <li><Link >Disease Detection</Link></li>
            {/* <li><Icon   size={18} icon={envelopeO}   style={{  backgroundColor: "white",}}/></li> */}

          {/* <li><Icon  size={18} icon={search}  style={{ backgroundColor: 'white',}}/></li> */}
    </ul>
    </nav>
        </div>
      </Col>

   
   </Row>

      <Content>  
      <div style={{background: '#fff', padding: 24, minHeight:28}}>
        {props.children}         
        </div>
    </Content> 
  </Layout>

    );
}

export default CustomLayout    
    
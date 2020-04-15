import React from 'react';
import axios from 'axios';
import {Card,} from 'antd';  
import { Rate } from 'antd';   
import img  from 'react-bootstrap';
import { /*EditOutlined, EllipsisOutlined, SettingOutlined*/ ShoppingCartOutlined } from '@ant-design/icons';
import { InputNumber } from 'antd';
import '../containers/productDetailView';
import { PlusSquareFilled } from '@ant-design/icons';
import Magnifier from "react-magnifier";
import { Row, Col, Container, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { List, Button, Empty} from 'antd';
import { Input, Select, DatePicker, AutoComplete, Cascader } from 'antd';
import {  Avatar } from 'antd';
import { Spin, Alert } from 'antd';
import Category from './category';
const { Meta } = Card;
const { Option } = Select;
const { Search } = Input;

const style = { background: '#0092ff', padding: '8px 0' };
  
class Filtercategory extends React.Component {

       
   
state ={
        product: [] ,
        value: 3,
        quantity:0
    }

    componentDidMount(){
        const Category = this.props.match.params.Category;
        // this.props.match.params.category;
        console.log(Category);
        axios.get(`http://192.168.10.3:8000/api/farmerProducts?category=Fruits`)
        // ?category=Fruits
        .then(res => {
            this.setState({
                product:res.data
            });
            console.log(this.state.product)
        })
        
    }
  
    
    render() {
       
        return (
            <Row >
            <Col className="gutter-row" span={24}>
                <div style={{backgroundColor:"#F9F6F7",paddingTop:20}}>
                <List
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 12,
              position: "both",
              responsive: true,
            }}
           
    grid={{  column: 4 }}
    dataSource={this.state.product}
     
    renderItem={item => (
      
      <List.Item>   
  <Card
    style={{ width: 300, margin:'10%',marginTop:'5%',marginLeft:'5%', border:"1px solid black" }}
    cover={
      <img
        alt="cover"
        src={item.productPicture}
        style={{height:200}}
      />
    }
    actions={[
      <ShoppingCartOutlined />,
     
        
    ]}
  >
    <Meta
      avatar={<Avatar src={item.productPicture}/>}
      title={<a href={`/${item.id}`}>{item.productName}</a>}
      description={item.productPrice}
    />
    
  </Card>,
  
      </List.Item>
    )}
  />  
  
     </div>
        
        </Col> 
        </Row>      
        
          
               
        )
    }

}
export default Filtercategory;
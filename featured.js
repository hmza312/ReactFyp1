import React from 'react';
import axios from 'axios';
 import { List, Button, Empty} from 'antd';
import { Input, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';
import { Card, Avatar } from 'antd';
import "./category.css";

import history from '../history';
import{BrowserRouter as Router, Route} from "react-router-dom"; 
import { /*EditOutlined, EllipsisOutlined, SettingOutlined*/ ShoppingCartOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';
import ProductDetail from '../containers/productDetailView';
import {Link} from 'react-router-dom';
import { Row, Col, Divider } from 'antd';
import { Spin, Alert } from 'antd';
import Category from './category';
const { Meta } = Card;
const { Option } = Select;
const { Search } = Input;
export default class Featured extends React.Component{
          state ={
            articles: [],
            isLoading: true,
            error: null
        };  
    
            componentDidMount(){
                //  this.setState({ isLoading: true });
                   
                axios.get('http://192.168.10.3:8000/api/farmerProducts/')
                .then(res => {
                    this.setState({
                        articles:res.data,
                        isLoading: false
                    });                           
                })
                .catch((error) => {
                  console.error(error);
                }) 
              }
          

        render(){
          if(this.state.isLoading){
            return(  
              
                  <Spin tip="Loading..." size="large" style={{justifyContent:"center", alignItems:"center"}}/>
              
                  );
          }
    

          return(  

           <Row >
            <Col className="gutter-row" span={24}>
             
            <div style={{backgroundColor:"#F9F6F7",paddingTop:20}}>
              <div style={{display:"inline", marginLeft:20}}>
                {/* <Select defaultValue="Option1">
                  <Option value="Option1">Option1</Option>
                  <Option value="Option2">Option2</Option>
                </Select> */}
               <Search
                  style={{width:"20%", marginRight:8}}
                  placeholder="Search Products"
                  autoComplete='true'
                  onSearch={productName => {
                    productName=="" ?
                      axios.get('http://192.168.10.3:8000/api/farmerProducts/')
                          .then(res => {
                              this.setState({
                                  articles:res.data
                              });
                              console.log(res.data);
                  
                          })  
                  :
                        axios.get(`http://192.168.10.3:8000/api/farmerProducts/?productName=${productName}`)
                        .then(res => {
                            this.setState({
                                articles:res.data
                            });
                            console.log(res.data);
                
                        })  
                          
                  } 
                }
              
                  /> 
      <Select defaultValue="1">
        <Option value="1">Between</Option>
        <Option value="2">Maximum</Option>
        <Option value="2">Minimum</Option>
      </Select>
      <Input style={{ width: 100, textAlign: 'center' }} placeholder="Minimum" />
      <Input
        className="site-input-split"
        style={{
          width: 30,
          borderLeft: 0,
          borderRight: 0,
          pointerEvents: 'none',
        }}
        placeholder="~"
        disabled
      />
      <Input
        className="site-input-right"
        style={{
          width: 100,
          marginRight:8,
          textAlign: 'center',
        }}
        placeholder="Maximum"
      />
        <DatePicker style={{ width: '20%' }} />
           </div>

           
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
    dataSource={this.state.articles}
     
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
        );
        }
      }
    

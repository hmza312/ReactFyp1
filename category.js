import React from 'react';
import { List, Button} from 'antd';
import Filtercategory from './Filtercategory';
import {Route,BrowserRouter as Router} from 'react-router-dom';
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import { Card, Avatar } from 'antd';
import "./category.css";
import { Input, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';
import { /*EditOutlined, EllipsisOutlined, SettingOutlined*/ ShoppingCartOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';
import { Row, Col, Divider } from 'antd';
import history from '../history';
const { Meta } = Card;
const { Option } = Select;
const { Search } = Input;
let station='';
const temp=[];
const temp1=[];
const temp2=[];
const temp3=[];

    class Category extends React.Component{
        state ={
            articles: [],
            Vegetable:[],
            Fruits:[],
            Fertilizers:[],
            WholeGrains:[],
        }        
            componentDidMount(){
                // // axios.get('http://192.168.10.7:8000/api/farmerProducts/')
                // // .then(res=> {
                // //   station=res.data.category;
                // //   console.log(station)
                // //   if(station==="Vegetable"){
                // //     console.log(res.data)
                // //   }
               return fetch('http://192.168.10.3:8000/api/farmerProducts/')
              .then((response) => response.json())
          .then((responseJson) => {
              var veg=0;
              var frt=0;
              var fert=0;
              var grain=0;
      for(var i=0;i<16;i++){
     
      if(responseJson[i].category==="Vegetable"){
           temp[veg]=responseJson[i]
           veg++;
    
        }
      if(responseJson[i].category==="Fruits"){
        temp1[frt]=responseJson[i]
        frt++;
      }
      if(responseJson[i].category==="Fertilizers"){
        temp2[fert]=responseJson[i]
        fert++;
      }
      if(responseJson[i].category==="WholeGrains"){
        temp3[grain]=responseJson[i]
        grain++;
      }}
     
                    this.setState({
                        articles:responseJson,
                        Vegetable:temp,
                        Fruits:temp1,
                        Fertilizers:temp2,  
                        WholeGrains:temp3,
                    });
                    // console.log(this.state.vegetable);
        
                }
                
    )}        
            
        render(){     
          function handleChange(value) {
// //          if(value==="All"){
// //            fetch(`http://192.168.10.3:8000/api/farmerProducts/`)
// //           .then((response) => response.json())
// //       .then((responseJson) => {
// //         this.setState({
// //        Vegetable:responseJson
// // });
// // }
// //          )

// //          }
//         else{
           var category=value;
            history.push(`/Products/category?category=${category}`)         
          }
          return(
            <Router>
            <div style={{paddingTop:20}}>
              <div style={{display:"inline", marginLeft:20}}>
                <Select defaultValue="All"
                  onChange={handleChange}
                  // onClick={handleChange}
                  style={{width:"10%", marginRight:8}}>
                  <Option value="All">All</Option>
                  <Option value="Vegetable">VEGETABLES</Option>
                  <Option value="Fruits">FRUITS</Option>
                  <Option value="Fertilizers">FERTILIZERS</Option>
                  <Option value="WholeGrains">WHOLE-GRAINS</Option>

                </Select>
                
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

              {/* VEGETABLES             */}
              <Row >
                <Col className="gutter-row" span={24}>
            <div  style={{backgroundColor:"#F9F6F7"}}>
              <p className="Title">VEGETABLES</p>
            <List
            
    grid={{  column: 4 }}
    dataSource={this.state.Vegetable}

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
      <Button style={{alignSelf:"center"}}>Open</Button>
    ]}
  >
    <Meta
      avatar={<Avatar src={item.productPicture} />}
      title={item.productName}
      description={item.productPrice}
    />
  </Card>,
      </List.Item>
    )}
  
  />
  
  </div>
            </Col> 
        </Row>
        {/* FRUITS */}
       <Row >
       <Col className="gutter-row" span={24}>
       <div  style={{backgroundColor:"#F9F6F7"}}>
         <p className="Title">FRUITS</p>
       <List
            grid={{  column: 4 }}
            dataSource={this.state.Fruits}

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
            <Button style={{alignSelf:"center"}}>Open</Button>
            ]}
            >
            <Meta
            avatar={<Avatar src={item.productPicture} />}
            title={item.productName}
            description={item.productPrice}
            />
            </Card>,
            </List.Item>
            )}
            />

            </div>
       </Col> 
   </Row>

            {/* FERTILIZERS */}
   <Row >
       <Col className="gutter-row" span={24}>
       <div  style={{backgroundColor:"#F9F6F7"}}>
         <p className="Title">FERTILIZERS</p>
       <List
grid={{  column: 4 }}
dataSource={this.state.Fertilizers}

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
 <Button style={{alignSelf:"center"}}>Open</Button>
]}
>
<Meta
 avatar={<Avatar src={item.productPicture} />}
 title={item.productName}
 description={item.productPrice}
/>
</Card>,
 </List.Item>
)}
/>

</div>
       </Col> 
   </Row>
      {/* WholeGrains */}
   <Row >
       <Col className="gutter-row" span={24}>
       <div  style={{backgroundColor:"#F9F6F7"}}>
         <p className="Title">WHOLE-GRAINS</p>
       <List
        grid={{  column: 4 }}
        dataSource={this.state.WholeGrains}

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
        <Button style={{alignSelf:"center"}}>Open</Button>
        ]}
        >
        <Meta
        avatar={<Avatar src={item.productPicture} />}
        title={item.productName}
        description={item.productPrice}
        />
        </Card>,
        </List.Item>
        )}
        />

</div>
       </Col> 
   </Row>
   <Route exact path='Products/category/?category=:Category' component={Filtercategory}/> 
   </div>
     
   </Router>

        );
        }
    }
    export default Category;
import React from 'react';
import axios from 'axios';
import {Card,} from 'antd';  
import { Rate } from 'antd';   
import img  from 'react-bootstrap';
import { InputNumber } from 'antd';
import './productDetailView.css';
import { PlusSquareFilled } from '@ant-design/icons';
import Magnifier from "react-magnifier";
import { Row, Col, Container, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const style = { background: '#0092ff', padding: '8px 0' };

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

  
class ProductDetail extends React.Component {

       
   
state ={
        product: {} ,
        value: 3,
        quantity:0
    }

    componentDidMount(){
        const productID = this.props.match.params.productID;
        console.log(productID);
        axios.get(`http://192.168.10.10:8000/api/farmerProducts/${productID}`) 
        .then(res => {
            this.setState({
                product:res.data
            });
            
        })
        
    }
  
    handleChange = value => {
      this.setState({ value });
    };
    
    render() {
        function onQuantity(quantity) {
            console.log('changed', quantity);
          }
      const { value } = this.state;
        return (
            <Container>
            <Row>
                <Col md={6}>
                <div className="img-magnifier-container">
                <Magnifier 
                  id="myimage" src={this.state.product.productPicture} alt={this.state.product.productName}  style={{width:'100%', height:'auto'}}
                  />             
                  <div class="overlay">Zoom on Hover</div>
                </div>
              <script>
              magnify("myimage", 3);
              </script>
                </Col>
                <Col md={6} >
                    <div style={{paddingLeft:'5%'}}>
                <div className="o">
        <h1 style={{fontSize: "26px",textAlign:'left'}}>{this.state.product.productName}</h1>
        <p style={{fontSize: "20px",fontWeight: "bold"}}>{this.state.product.productPrice}</p>
                    <p className="p">Add To Cart</p>
                    <h2>Description</h2>
        <p>{this.state.product.description}</p>
        <h1 style={{fontSize: "26px",textAlign:'left'}}>Total Quantity: {this.state.product.productQuantity}</h1>
        <InputNumber min={1} max={100000} defaultValue={0} onChange={onQuantity} />
     
        <span>
        <Rate tooltips={desc} onChange={this.handleChange} value={value} style={{color:'orange'}}/>
        {/* {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''} */}
      </span>
     
                    <hr style={{paddingTop:'3%', width:'100%',marginLeft:-8}}></hr>
                </div>
                </div>
                <div style={{paddingLeft:'5%'}}>
                <Table striped bordered hover>
                            <tbody>
                                {/* <tr>
                                <td>ProductQuantity</td>
                                <td colSpan="2">{this.state.product.productQuantity}</td>
                                </tr> */}
                                <tr>
                                <td>Category</td>
                                <td>{this.state.product.category}</td>
                                </tr>
                                <tr>
                                <td>ProductType</td>
                                <td colSpan="2">{this.state.product.prodyctType}</td>
                                </tr>
                                
                            </tbody>
                            </Table>
                        </div>
                {/* <Card title={this.state.product.productName}>
                     <p>{this.state.product.username}</p>
                     <p>{this.state.product.category}</p>
                     <p>{this.state.product.productQuantity}</p>
                     <p>{this.state.product.prodyctType}</p>
                     <p>{this.state.product.productPrice}</p>
                     <p>{this.state.product.description}</p>
                     <p style ={{width:300,height:40,borderColor:'black',border:'1px solid black',textAlign:'center',padding:3,fontSize:20}}>
                        Add to Chart
                     </p>

            
              </Card> */}
                    </Col>
            </Row>
</Container>
        //     <Row>
        //     <Col  span={12}>
        //         <div class="container" style={{backgroundColor:"blue"}}>
        //             
        //         </div>
        //     </Col>
        //     <Col  span={12}>
        //         <div  class="container" style={{backgroundColor:"yellow"}}>
        //             <Card title={this.state.product.productName}>
        //             <p>{this.state.product.username}</p>
        //             <p>{this.state.product.category}</p>
        //             <p>{this.state.product.productQuantity}</p>
        //             <p>{this.state.product.prodyctType}</p>
        //             <p>{this.state.product.productPrice}</p>
        //             <p>{this.state.product.description}</p>
        //             <p style ={{width:300,height:40,borderColor:'black',border:'1px solid black',textAlign:'center',padding:3,fontSize:20}}>
        //             Add to Chart
        //             </p>

            
        //      </Card>
        //      </div>
        //     </Col>
        //   </Row>
            // <div style={{flex:1}}>
            // <Card title={this.state.product.productName}>
            //     <img alt="pic" src={this.state.product.productPicture}/>
            //     <p>{this.state.product.username}</p>
            //     <p>{this.state.product.category}</p>
            //     <p>{this.state.product.productQuantity}</p>
            //     <p>{this.state.product.prodyctType}</p>
            //     <p>{this.state.product.productPrice}</p>
            //     <p>{this.state.product.description}</p>
            
            // </Card>
            // </div>
        )
    }

}
export default ProductDetail;
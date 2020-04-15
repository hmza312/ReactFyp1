import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import CustomLayout from '../containers/layout'
import Category from '../Component/category';
import Filtercategory from './Filtercategory'
import Featured from '../Component/featured';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom';
export default class Section extends React.Component{
    render(){
    return(
        <Router>
        <div>
            <Menu theme="Light" mode="horizontal" defaultSelectedKeys={['1']} style={{marginTop:-30}}>
                <Menu.Item key="1"><Link to="/">Featured Products</Link></Menu.Item>
                <Menu.Item key="2" ><Link to="/Products/category">Categories</Link></Menu.Item>
                <Menu.Item key="3"><Link>New Products</Link></Menu.Item>
            </Menu>
              <Route exact path="/" component={Featured} />
             <Route exact path="/Products/category" component={Category} />
           {/* <Route exact path="/Products/category?category=:Category"  component={Filtercategory} /> */}
     
        </div>
        </Router>
    );
    }
}
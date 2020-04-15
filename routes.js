import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import category from './Component/category'
// import Start from './Enter'
import Section from './Component/Menu';
// import Category from './Component/category';
import Featured from './Component/featured';
import ProductDetail from './containers/productDetailView';
// import ArticleDetail from './containers/ArticleDetailView';
import history from './history'
import Filtercategory from './Component/Filtercategory'
const BaseRouter = () => (
    <div>
       
        <Route exact path='/' component={Section}/>
          <Route exact path='/:productID' component={ProductDetail}/> 
          {/* <Route exact path='/Products/category/:category' component={Filtercategory}/>  */}
          {/* <Route exact path="/Products/category?category=:Category"  component={Filtercategory} /> */}
          <Route exact path='Products/category?category=:Category' component={Filtercategory}/> 
    </div>

)

export default BaseRouter;
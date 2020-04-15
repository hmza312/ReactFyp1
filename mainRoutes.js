import React from 'react';
import { Route } from 'react-router-dom';
import category from './Component/category'

import { Menu } from 'antd';
import Start from "./Enter";

const MainRouter = () => (
    <div>
         <Route exact path="/" component={Start}/>
        {/* <Route exact path='/:articleID' component={ArticleDetail}/> */}
    </div>

)

export default MainRouter;
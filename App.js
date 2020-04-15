import React ,{Component} from "react";


// import Main from './Component/main';
// import Contact from './Component/contact';
// import Help from './Component/help';
import history from './history';
import Start from './Enter'
// import Login from "./signin";
// import Farmer from './Component/Farmer'
// import Vendor from "./Component/Vendor";
// class App extends React.Component{

// render(){
//   return (
//     <Router history={history}>
  
       
// <div>      
//         <Switch>
//           <Route exact path="/" component={Start}>
          
//           </Route>
//           <Route exact path="/main" component={Main}>
          
//           </Route>
//           <Route path="/contact" component={Contact} >
        
//           </Route>
//           <Route path="/help" component={Help}>
          
//           </Route>
//           <Route path="/login" component={Login}>
          
//           </Route>
//           <Route path="/farmer" component={Farmer}>
          
//           </Route>
//           <Route path="/vendor" component={Vendor}>
          
//           </Route>
//         </Switch>
//         </div>
 
//     </Router>
//   );
  
// }
// }
// export default App;



import './App.css';
import 'antd/dist/antd.css';
import BaseRouter from './routes';
// import Section from './Component/Menu'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CustomLayout from './containers/layout';
import Section from './Component/Menu';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Router history={history}>
                    <CustomLayout>  
                          <BaseRouter/>                     
                    </CustomLayout>
                 
          </Router>
      </div>
    );
  }
}

export default App;
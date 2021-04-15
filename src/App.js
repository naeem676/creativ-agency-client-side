
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/login/Login';
import NoMatch from './components/noMatch/NoMatch';
import OrderPlace from './components/orderPlace/OrderPlace';
import Review from './components/review/Review';
import ClientServiceList from './components/Clientservislist/ClientServiceList';
import AdminServiceList from './components/adminService/AdminServiceList';
import AddService from './components/addService/AddService';
import MakeAdmin from './components/makeAdmin/MakeAdmin';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
export const ServiceContext = createContext();

function App() {
            
            const [loggedUser, setLoggedUser] = useState({});
            const [selected, setSelected] = useState({});
  return (
    <div>
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
    <ServiceContext.Provider value={[selected, setSelected]}>
    <Router>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route  path='/home'>
        <Home></Home>
        </Route>
        <Route  path='/login'>
        <Login></Login>
        </Route>
        <PrivateRoute path='/order'>
          <OrderPlace></OrderPlace>
        </PrivateRoute>
        <Route  path='/review'>
        <Review></Review>
        </Route>
        <Route  path='/client'>
        <ClientServiceList></ClientServiceList>
        </Route>
        <Route  path='/admin'>
        <AdminServiceList></AdminServiceList>
        </Route>
        <Route  path='/addService'>
        <AddService></AddService>
        </Route>
        <Route  path='/makeAdmin'>
        <MakeAdmin></MakeAdmin>
        </Route>
        <Route  path='*'>
        <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    </ServiceContext.Provider>
    </UserContext.Provider>
    </div>
  );
}

export default App;

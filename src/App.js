import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddServices from './Pages/AddServices/AddServices';
import ManageService from './Pages/ManageService/ManageService';
import Order from './Pages/Order/Order';
import MyOrder from './Pages/MyOrder/MyOrder';
import Service from './Pages/Home/Service/Service';
import ManageOrder from './Pages/ManageOrder/ManageOrder';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/addService">
              <AddServices></AddServices>
            </PrivateRoute>
            <PrivateRoute path="/ManageService">
              <ManageService></ManageService>
            </PrivateRoute>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/orders/:serviceId">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/myorder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/manageOrder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute path="/manageOrder/:serviceId">
              <Order></Order>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

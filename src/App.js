import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import WishList from "./components/Favourite/WishList";
import Modal from "./components/Modal";
import ShopList from './ShopComponent/ShopList';
import StoreProfile from './ShopComponent/StoreProfile';
import LoginForm from './components/LoginForm';
import Cookie from 'universal-cookie';
import UserProfile from './components/UserProfile';
import AddShop from './ShopComponent/AddShop';
import StoreDetail from './OwnersComponent/StoreDetail';
import Update from './OwnersComponent/Update';
import EditProduct from './OwnersComponent/EditProduct';
import ProductDetail from './OwnersComponent/ProductDetail';
import AddProduct from './OwnersComponent/AddProduct';
import DashBoard from './OwnersComponent/DashBoard';

const cookie = new Cookie();


class App extends Component {
  state = {
    isLoggedIn: false,
    showProfile: false
  }

  setLogginUser = () => {
    if (cookie.get('user') != null)
      this.setState({ isLoggedIn: true });
    else {
      this.setState({ isLoggedIn: false });
    }
  }

  showHideUserProfile = () => {
    if (this.state.showProfile) {
      this.setState({ showProfile: false });
    } else {
      this.setState({ showProfile: true });
    }
  }

  getUserProfileView = () => {
    if (this.state.showProfile) {
      return <UserProfile showHideUserProfile={this.showHideUserProfile} setLogginUser={this.setLogginUser}/>
    } else {
      return null;
    }
  }

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <Navbar showHideUserProfile={this.showHideUserProfile} />
        <Switch>
          <Route exact path="/" component={ShopList} />
          <Route path="/profile" component={StoreProfile} />
          <Route path="/userprofile" component={UserProfile} />
          <Route path="/productlist" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/loginpage" render={(props) => <LoginForm {...props} setLogginUser={this.setLogginUser} />} />
          <Route path="/wishlist" component={WishList} />
          <Route path="/addShop" component={AddShop} />
          <Route path="/storeDetail" component={StoreDetail}/>
          <Route path="/UpdateProduct" component={Update} />
          <Route path="/editProduct" component={ProductDetail}/>
          <Route path="/addProduct" component={AddProduct}/>
          <Route component={Default} />
        </Switch>
        <Modal />
        {this.getUserProfileView()}
      </React.Fragment>
    )
  }
}

export default App;

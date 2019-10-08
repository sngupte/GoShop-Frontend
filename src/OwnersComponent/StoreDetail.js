import React, { Component } from 'react'
import { StoreConsumer } from "../StoreContext";
import UpdateStore from "./UpdateStore";
import './StoreDetail.css';
import Service from '../api/Service';
import Cookie from 'universal-cookie';
import { Buttoncontainer } from "../components/Button";
import AddShop from '../ShopComponent/AddShop';
export default class StoreDetail extends Component {

  state = {
    id: "",
    photoUrl: "",
    name: "",
    shop: "",
    edit : false
  }

  componentDidMount = async () => {
    const cookie = new Cookie();
    const resp = await Service.get("/shopDetailsByUserId?userId=" + cookie.get('user').data.id);

    if(resp.data.success){
    this.setState({ id: resp.data.data.id, photoUrl: resp.data.data.photoUrl, name: resp.data.data.name ,shop:resp.data.data});
    cookie.set('shopId',resp.data.data.id)
    }
  }

goToHomePage = () => {
  this.props.history.push("/");
}

  render() {
    if(!this.state.edit){
    return (

         
            <div className="storeDetailsContanier">
            <Buttoncontainer className="editButtonStoreDetails" onClick={()=>{this.setState({edit:true})}}>edit</Buttoncontainer>

              <img src={this.state.photoUrl} className="storeDetailProfilePic" />
              <div className="storeDetailShopName">
                <div className="storeDetailNameOfShop">

                  <h1>{this.state.name}</h1>
                </div>
              </div>
              <UpdateStore shopsDetail={this.state.shop}/>
            </div>
          );
    } else {
      return <AddShop shopDetails={this.state.shop} goToHomePage={this.goToHomePage}/>
    }
  
  
  }
}

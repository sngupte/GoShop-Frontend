import React, { Component } from 'react'
import { storeProfile } from './ShopData';
import { storeList } from './ShopData'
import Service from './api/Service'
import{shopProfile} from './StorepData'
import Cookie from 'universal-cookie';

const StoreContext = React.createContext();

class StoreGuide extends Component {
  state = {
    shops: [],
    storeProfile: storeProfile,

    overview:true,
    productList:false,
    review:false,
    shopsDetail:shopProfile,
    Edit:false,
    save:true
  }
  componentDidMount() {
    this.setShop();
  }

  // getMyShopData = async () => {
  //   const cookie = new Cookie();
  //   const resp = Service.get("/shopDetailsByUserId?userId="+cookie.get('user').data.id);

  //   //if(resp.data.success){
  //     return resp;
  //     this.setState({shopsDetail : resp.data.data});
  //   //}
  // }

  setShop = async () => {

    const resp = await Service.post("/searchShop", {},{"Access-Control-Allow-Origin": "*"});
    console.log(resp);

    let tempShops = [];
    resp.data.data.forEach(store => {
      const singleStore = { ...store };
      tempShops = [...tempShops, singleStore]
    });
    this.setState(() => {
      return { shops: tempShops };
    });
  };

  getShop = (id) => {
    const shop = this.state.shops.find(store => store.id === id);
    return shop;
  }
  handleProfile = async (id) => {

    //const resp = await Service.get("/shopDetails?id="+id);
    const shop = this.getShop(id);
    this.setState(() => {
      return { storeProfile: shop }
    })

  }
  toggletToOverview = () => {
    this.setState({ overview: true, review: false, productList: false })
  }
  toggleToList = () => {
    this.setState({ overview: false, review: false, productList: true })
  }
  toggleToReview = () => {
    this.setState({ overview: false, review: true, productList: false })
  }
  EnableEdit=()=>{
    this.setState( {Edit:true,save:false});
  console.log('hello Edit');
  }
  SaveChanges=()=>{
    this.setState({Edit:false,save:true});
  }
  

  render() {

    return (

      <StoreContext.Provider
        value={{
          ...this.state,
          handleProfile: this.handleProfile,
          toggletToOverview:this.toggletToOverview,
          toggleToList:this.toggleToList,
          toggleToReview:this.toggleToReview,
          getShop:this.getShop,
          EnableEdit:this.EnableEdit,
          SaveChanges:this.SaveChanges,
         // getMyShopData: this.getMyShopData

        }}>
        {this.props.children}
      </StoreContext.Provider>

    )
  }
}
const StoreConsumer = StoreContext.Consumer;
export { StoreGuide, StoreConsumer };
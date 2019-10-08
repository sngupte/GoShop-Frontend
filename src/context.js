import React, { Component } from 'react'
import {storeProducts, detailProduct} from './Data';
import Service from "./api/Service";
const ProductContext=React.createContext();



class ProductProvider extends Component {
    state={
        products:[],
        detailProduct:detailProduct,
        wishList:[],
        modalOpen:false,
        modalProduct:detailProduct,
        OpenProfile:false,
        Edit:false,
        save:true,
        rating:'',


        
    };
    componentDidMount(){
      //this.setProducts();
    }
    setProducts= async (id)=>{
      const resp = await Service.post("/filterProducts/"+id,{});
      let tempProducts=[];
      resp.data.data.forEach(item=>{
        const singleItem={...item};
        tempProducts=[...tempProducts,singleItem];

      })
      this.setState(()=>{
        return {products:tempProducts};
      })
    };

    getItem=(id)=>{
      const product=this.state.products.find(item=>item.id===id);
      return product;
    }

    handleDetail=(id)=>{
        const product=this.getItem(id);
        this.setState(()=>{
          return {detailProduct:product}
        });
    };


    addToWish=(id)=>{
     let tempProducts=[...this.state.products];
     const index=tempProducts.indexOf(this.getItem(id));
     const product=tempProducts[index];
     product.inWish=true;
     this.setState(()=>{
       return {products:tempProducts, wishList:[...this.state.wishList,
        product]};
     },()=>{
       console.log(this.state);
     });
    };


openModal=id=>{
  const product=this.getItem(id);
  this.setState(()=>{
    return {modalProduct:product,modalOpen:true}
  })
}


closeModal=id=>{
  this.setState(()=>{
    return{modalOpen:false}
})
}

removeItem=(id)=>{
  let tempProducts=[...this.state.products];
  let tempList=[...this.state.wishList];
  tempList=tempList.filter(item=>item.id !== id);
  const index=tempProducts.indexOf(this.getItem(id))
  let removedProduct=tempProducts[index];
  removedProduct.inWish=false;
  this.setState(()=>{
    return{
      wishList:[...tempList],
      products:[...tempProducts]
    }
  })
}

clearList=()=>{
  this.setState(()=>{
    return{wishList:[]};
  },()=>{
    this.setProducts();
});
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
      <ProductContext.Provider 
      value={{
        ...this.state,
       handleDetail:this.handleDetail,
       addToWish:this.addToWish,
       openModal:this.openModal,
       closeModal:this.closeModal,
       increament:this.increament,
       decreament:this.decreament,
       removeItem:this.removeItem,
       clearList:this.clearList,
       setProducts:this.setProducts,
       closeProfile:this.closeProfile,
       openProfile:this.openProfile,
       EnableEdit:this.EnableEdit,
       SaveChanges:this.SaveChanges,
       AddRating:this.AddRating,
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}
const ProductConsumer=ProductContext.Consumer;

export{ProductProvider,ProductConsumer};
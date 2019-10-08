import React, { Component } from 'react'
import Title from '../Title';
import FavouriteColumns from './FavouriteColumns';
import FavouriteList from './FavouriteList';
import {ProductConsumer} from '../../context';
import EmptyList from './EmptyList';
import ClearList from './ClearList'
export default class WishList extends Component {
  render() {
    
    return (
      <selection>
        <ProductConsumer>
          {value => {
            const {wishList}=value;
            if(wishList.length===0){
              return <EmptyList/>;
            }
            else{
              return(
              <React.Fragment>
              <Title name="your" title="Favourites"/>
              <FavouriteColumns/>
              <FavouriteList value= {value}/>
              <ClearList value={value}/>
              </React.Fragment>
              );
            }
           }}
        </ProductConsumer>
        
      </selection>
    )
  }
} 
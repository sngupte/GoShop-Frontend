import React from 'react'
import FavouriteItem from './FavouriteItem'
export default function FavouriteList({value}) {
  const{wishList}=value
  return (
    <div className="container-fluid ">
    {wishList.map(item=>{
      return <FavouriteItem key={item.id} item={item}
      value={value}/>
    })}
    
    </div>
  )
}

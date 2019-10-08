import React from 'react'

export default function FavouriteItem({item,value}) {
  const{id,name,photoUrl,originalPrice}=item;
  const{removeItem}=value;
  return (
    <div className="row my-2 text-capitalize text-center">
    <div className="col-10 mx-auto col-lg-2">
    <img src={photoUrl} style={{width:"5rem",height:"5rem"}}
    className="img-fluid"
    alt="product"
    />
    </div>
    <div className="col-10 mx-auto col-lg-2">
      <span className="d-lg-none">product:</span>
      {name}
    </div>
    <div className="col-10 mx-auto, col-lg-2">
    <span className="d-lg-none">price:</span>
    {originalPrice}
    </div>
    <div className="col-10 mx-auto col-lg-2 my-2 my-2 my-lg-8">
      <div className="d-flex justify-content-center">
      <div className="Fav-icon" onClick={()=>removeItem(id)}>
        <i className="fas fa-trash"></i>
      </div>
      </div>

    </div>
    </div>
  );
}

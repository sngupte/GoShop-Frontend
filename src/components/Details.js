import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import {Link} from 'react-router-dom';
import {Buttoncontainer} from './Button';
import styled from 'styled-components'

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value)=>{
          const{id,name,photoUrl,description,originalPrice,sizes,inWish}=
          value.detailProduct;
          return(
            <DetailStyle>
            <div className="DetailOuterView">
              
                <div className="ProductName">
                  <h1>{name}</h1>
                </div>
             
              {/*end title */}
              {/*Product info*/}
              <div className="Detail-Product">
                <div >
                <img  src={photoUrl} className="img-fluid ProductImage flip" alt="product"/>
                </div>
                </div>
                {/*product image*/}
                <div className="Info-details">
                 
                  <h4  className="PriceLbl">
                  <strong>
                    Price: <span className="RupeeSys">  &#8377;</span>
                    <span  className="Amount"> {originalPrice}  </span>
                  </strong>
                  
                  </h4>
                  
                  <p className="descriptionView">
                  <strong className="descriptionLbl">
                  Description:
                  </strong>
                  <p className="description">{description}</p>
                  </p>
                  
                   <h3 className="sizeLbl" ><strong>Size:</strong> <span className="sizeAvail">{sizes}</span> </h3>
                  {/*buttons */}
                  <div className="ButtonView">
                    <Link to="/profile">
                      <Buttoncontainer >
                        Back to List
                      </Buttoncontainer>
                    </Link>
                    <Buttoncontainer  className="secondButton"
                    wish
                    disabled={inWish?true:false}
                    onClick={()=>{ 
                      value.addToWish(id);
                      // value.openModal(id);
                    }}
                    >
                    
                      {inWish? "inWish": "add to Wishlist"}
                    </Buttoncontainer>
                  </div>
                </div>
              </div>
              
           </DetailStyle>
          )
            
          
        }}
      </ProductConsumer>
    )
  }
}

const DetailStyle=styled.div`

.DetailOuterView{

 // background:black;
}
.Detail-Product{
  margin-left:150px
  margin-top:-50px
}

.ProductName{
  color: var(--themeOrange);
  border-color: var(--mainDark);
  margin-top:50px
  margin-left:600px
}

.ProductImage{
  height:400px;
  width: 300px;
  margin-left:0px;
  margin-top:10px;

  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
 // width: 150px;
}
.Info-details{
  margin-left:600px
 margin-top:-310px
}
.PriceLbl{
  color:var(--Grey);
  font-size: 1.1rem !important;
}

.Amount{
  color:var(--Heartred);
  font-size: 1.1rem !important;

}
.RupeeSys{
  color:var(--Heartred);
  font-size: 0.9rem !important;

}
.descriptionView{
  margin-top:20px
}

.descriptionLbl{
  color:var(--Grey);
  font-size: 0.9rem !important;
 
}
.description{
  color: var(--mainDark);
  margin-top:-25px
  margin-left:100px
  font-size: 1.1rem !important;
}

.sizeLbl{
  color:var(--Grey);
  font-size: 0.9rem !important;
}
.sizeAvail{
  color: var(--mainDark);
  font-size: 1.1rem !important;
  margin-left:10px
}
.ButtonView{
  margin-top:40px
}
.secondButton{
  margin-left:50px
}

.flip:hover {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
`
import styled from "styled-components";

export const ProductWrapper = styled.div`
.shop-card{
  display: flex;
   flex-direction: column; 
   width: 33.3333%; 
   padding-left: 32px;

}
.card{
  border-color:"#555555";
  transition:all 0.1s linear;
  position:relative;
  height: 250px;
  width: 250px;
  
}
.card-footer{
  background:transparent;
  border-top:transparent;
  transition:all 1s linear;
  height:50px
}
&:hover{
  .card{
    border:0.04rem solid rgba(0,0,0,0.3);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
   
  }
  .card-footer{
    background:rgba(247,247,247);
  }
}
.img-container{
  position:relative;
  overflow:hidden;
  bottom:0;
    right: 0;
  
}
.card-img-top{
  transition:all 0.2s linear;
  height: 200px;
 // max-height: 0px;
  width: 200px;
 // max-width: 150px; 
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 12px;
  margin-left: 9px;

 
}
.img-container:hover .card-img-top{
  transform:scale(1.2);
}
.wish-btn{
    position: absolute;
    bottom:0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightblue);
    border: none;
    color: var(--mainwhite);
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform:translate(100%, 100%);

}
.img-container:hover .wish-btn{
    transform: translate(0,0);
}
.wish-btn:hover{
    color:var(--Heartred);
    cursor: pointer;
}
/* Shop card */

/*address*/
.address{ 
  font-size: 1rem ;
  color: var(--Grey);
  text-align: center;

}

/* Name of Shop */
.nameOfShop{ 
  font-size: 1.3rem ;
  color: var(--Black);
  text-align: center; 

}
/*Star and rating*/
.fa-star{
  color:  var(--yellowStar);
  margin-left: 4px; 
  font-size: 0.8rem ;

}

.rating{
  font-size: 0.7rem ;
}


`;
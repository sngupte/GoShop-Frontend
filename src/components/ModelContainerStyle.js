import styled from "styled-components";

export const ModalContainer=styled.div`
  position:fixed;
  top:100px;
  left:0;
  right:0;
  bottom:0;
  background:rgba(0,0,0,0.5);
  display:flex;
  align-item:center;
 background:#f3f3f3;
  justify-content:center;
  
  #model{
    background:#f3f3f3;
  }

  .ProductName:{
    color:var(--themeOrange);
  }

  .PriceLbl{
    color:#ffffff;
    font-size: 1.1rem !important;
  }
  
  .Amount{
    color:var(--themeOrange);
    font-size: 1.1rem !important;
  
  }
  .RupeeSys{
    color:var(--themeOrange);
    font-size: 0.9rem !important;
  
  }

   
.message{
  color: var(--themeOrange);
  border-color: var(--mainDark);
  margin-top:10px
  margin-left:600px
}

`;
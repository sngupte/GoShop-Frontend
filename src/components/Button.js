import styled from "styled-components";

export const Buttoncontainer=styled.button`
text-Transform:capitalize;
font-size:1.4rem;
background:var(--mainDark);
border:0rem solid var(--lightblue);
border-color:${props => 
    props.wish?"#ffa408":"#efefef"};
color:${prop=>prop.wish?"#ffa408":"#efefef"};
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.1rem 0.1rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:${props => 
        props.wish?"#ffa408":"#efefef"};
    color:var(--themeOrange);
}
&:focus{
    outline:none;

}

`;

import React, { Component } from "react";
import styled from "styled-components";
import Link from "react-router-dom/Link";
import Cookie from 'universal-cookie';
import "./UserProfile.css"
import Service from '../api/Service'

const cookie = new Cookie();
export default class UserProfile extends Component {

  state = {
    shopPresent: true
  }

  logout = () => {
    cookie.remove('user');
    this.props.showHideUserProfile();
  }

  componentDidMount = async () => {
    const user = (cookie.get('user').data);
    const resp = await Service.get("/shopDetailsByUserId?userId=" + user.id);
    console.log(resp);

    if (resp.data.data == null) {
      this.setState({ shopPresent: false });
    }
  }

  getShopButton = () => {
    if (!this.state.shopPresent) {
      return <Link to="/addShop"><button className="addShopButton" onClick={() => { this.props.showHideUserProfile(); }}>Add Your Shop</button></Link>;
    } else {
      return <Link to="/storeDetail"><button className="addShopButton" onClick={() => { this.props.showHideUserProfile(); }}>View My Shop</button></Link>;
    }
  }

  render() {
    const user = (cookie.get('user').data) ? (cookie.get('user').data) : null;

    return (
      <div className="profileOuerContainer">
        <div className="profcard">
          <div className="row">
            <header className="popup__header">
              <i src="icons8-multiply-filled-50.png" className="profileImage" onClick={() => { this.props.showHideUserProfile(); }}>&nbsp;&nbsp;&nbsp;close</i>
            </header>
            <div
              id="profile"
              className="p-3">
              <img src="user2.png" className="profileImg" alt="avatar" />
              <h3>{user.name}</h3>
              <p>Phone: {user.phoneNumber}</p>
              <p>Email: {user.email}</p>
              {this.getShopButton()}
              <button className="logoutButton" onClick={() => { this.logout(); }}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export const ProfileStyle = styled.div`
// .card {
//     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
//     max-width: 300px;
//     max-height : 600px;
//     margin: auto;
//     text-align: center;
//     font-family: arial;

//   }

//   .title {
//     color: grey;
//     font-size: 18px;
//   }
//   .img-flaid{
//       width:150px;
//   }

//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: rgba(0, 0, 0, 0.3);

//   align-item: center;
//   justify-content: center;

//   button{
//     border: none;
//     outline: 0;
//     display: inline-block;
//     padding: 8px;
//     color: black;
//     background-color: #f3f3f3;
//     text-align: center;
//     cursor: pointer;
//     width: 100%;
//     font-size: 18px;
//     &:hover{
//         background:#333
//         color:var(--themeOrange);
//     }
//   }
//   .popup__header {
//     background-color:;
//     padding: 0.25em 0.75em;
//     margin-bottom: 2em;
//     text-align: right;
//   }
//   .popup__close {
//     display: inline-block;
//     width: 0.875em;
//     height: 0.875em;
//     background-color:rgba(50, 50, 50, 0.5);
//     border-radius: 50%;

//     &:hover {
//       background-color: darken(tomato, 8%);
//     }
//   }  
//   i { 
//     display: inline-block; 
//     font-family: inherit; 
//     font-size: 0.875em; 
//     vertical-align: 0.125em; 
//     margin-right: 0.5em;
//     color: slategray;
//     cursor:pointer;
//   }

// `;

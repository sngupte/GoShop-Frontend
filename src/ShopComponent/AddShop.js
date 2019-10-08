import React, { Component } from "react";
import Multiselect from "multiselect-dropdown-react";
import "./AddShop.css";
import "./Reference Files/w3_TextField.css";
import Service from '../api/Service';
import Cookie from 'universal-cookie';



import styled from "styled-components";
import Link from "react-router-dom/Link";

const categories = [
  {
    name: "Casual Shirts",
    value: "CasualShirts"
  },
  {
    name: "Formal Shirts",
    value: "FormalShirts"
  },
  {
    name: "T-Shirts",
    value: "TShirts"
  },
  {
    name: "Sweatshirts",
    value: "Sweatshirts"
  },
  {
    name: "Jackets",
    value: "Jackets"
  },
  {
    name: "Blazers",
    value: "Blazers"
  },
  {
    name: "Kurtas",
    value: "Kurtas"
  },
  {
    name: "Sherwanis",
    value: "Sherwanis"
  },
  {
    name: "Formal Trousers",
    value: "FormalTrousers"
  },
  {
    name: "Casual Trousers",
    value: "CasualTrousers"
  },
  {
    name: "Kurtas And Suits",
    value: "KurtasAndSuits"
  },
  {
    name: "Ethnic Dresses",
    value: "EthnicDresses"
  },
  {
    name: "Skirts And Palazzos",
    value: "SkirtsAndPalazzos"
  },
  {
    name: "Sarees And Blouses",
    value: "SareesAndBlouses"
  },
  {
    name: "Dresses And Jumpsuits",
    value: "DressesAndJumpsuits"
  },
  {
    name: "Tops",
    value: "Tops"
  }
];
export default class AddShop extends Component {
  state = {
    edit: false,
    headerText : "Please add your Shop's Information....!!!",
    id:"",
    file: "",
    photoUrl: "",
    name: "",
    state: "",
    city: "",
    phone: "",
    location: "",
    address: "",
    openingTime: "",
    closingTime: "",
    type: [],
    categories: [],
    offerTitle: "",
    offerDesc: "",
    Error: "",
    parkingAvail: "",
    changingRoomAvail: ""
  };
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  componentDidMount() {
    console.log(this.props)
    if (this.props && this.props.shopDetails) {
      this.setState({
        edit: true,
        headerText : "Please update your Shop's Information....!!!",
        id:this.props.shopDetails.id,
        photoUrl: this.props.shopDetails.photoUrl,
        name: this.props.shopDetails.name,
        state: this.props.shopDetails.state,
        city: this.props.shopDetails.city,
        phone: this.props.shopDetails.phone,
        location: this.props.shopDetails.location,
        address: this.props.shopDetails.address,
        openingTime: this.props.shopDetails.openingTime,
        closingTime: this.props.shopDetails.closingTime,
        type: this.props.shopDetails.type.split(","),
        categories: this.props.shopDetails.categories.split(","),
        offerTitle: this.props.shopDetails.offerTitle,
        offerDesc: this.props.shopDetails.offerDesc,
        parkingAvail: this.props.shopDetails.parkingAvail,
        changingRoomAvail: this.props.shopDetails.changingRoomAvail,
      });
    }
  }



  result = (params) => {
    this.setState({ categories: params });
    console.log(this.state);
  }

  handleChange(e) {
    e.persist();
    console.log(e);

    let target = e.target;
    //let value = target.type === "checkbox" ? target.checked : target.value;

    if (target.type === "checkbox") {
      const index = this.state.type.indexOf(target.value);
      console.log(index);
      if (index >= 0) {
        var temp = [...this.state.type];
        temp.splice(index, 1);
        console.log(temp);
        this.setState({ type: temp });
      } else {
        this.setState({ type: [...this.state.type, target.value] });
      }
    } else if ((target.type === "radio") && (target.name === "parkingAvail")) {
      if (target.value === 'yes') {
        this.setState({ parkingAvail: true });
      } else {
        this.setState({ parkingAvail: false });
      }

    } else if ((target.type === "radio") && (target.name === "changingRoomAvail")) {
      if (target.value === 'yes') {
        this.setState({ changingRoomAvail: true });
      } else {
        this.setState({ changingRoomAvail: false });
      }
    }
    else {

      let name = target.name;

      this.setState({
        [name]: target.value
      });
    }
  }

  async _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    const formData = new FormData();
    formData.append('file', file)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }

    const resp = await Service.post("/uploadImage", formData, config);

    console.log(resp);
    if (resp && resp.data && resp.data.success) {
      this.setState({ photoUrl: resp.data.data.imageUrl });
    }

  }

  dismissError() {
    this.setState({ error: "" });
  }

  async handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.name) {
      return this.setState({ error: "Shop Name is required" });
    }

    if (!this.state.state) {
      return this.setState({ error: "Enter your state" });
    }
    if (!this.state.city) {
      return this.setState({ error: "Enter your city" });
    }
    if (!this.state.phone) {
      return this.setState({ error: "Enter your Contact Number" });
    }
    if (!this.state.location) {
      return this.setState({ error: "Enter your location" });
    }
    if (!this.state.address) {
      return this.setState({ error: "Enter your Detail Address" });
    }
    if (!this.state.openingTime) {
      return this.setState({ error: "Enter Opening hours" });
    }
    if (!this.state.type) {
      return this.setState({ error: "Select types of cloths " });
    }
    if (!this.state.categories) {
      return this.setState({ error: "Select available Categories" });
    }

    console.log(this.state);

    const reqBody = {
      "id":this.state.id,
      "name": this.state.name,
      "state": this.state.state,
      "city": this.state.city,
      "location": this.state.location,
      "address": this.state.address,
      "phone": this.state.phone,
      "categories": this.state.categories,
      "type": this.state.type,
      "photoUrl": this.state.photoUrl,
      "offerTitle": this.state.offerTitle,
      "offerDesc": this.state.offerDesc,
      "openingTime": this.state.openingTime,
      "closingTime": this.state.closingTime,
      "parkingAvail": this.state.parkingAvail,
      "changingRoomAvail": this.state.changingRoomAvail
    }
    const cookie = new Cookie();
    const userId = cookie.get('user').data.id;
    var resp=null;
    if(!this.state.edit){
     resp = await Service.post("/registerShop/" + userId, reqBody);
     if (resp.data.success) {
      this.props.history.push("/");
    }
    } else {
      resp = await Service.put("/updateShop", reqBody);
      if (resp.data.success) {
        this.props.goToHomePage();
      }
    }
    

    return this.setState({ error: "" });
  }

  render() {
    return (
      <div class="w3-card-4">

        <div className="col-10 mx-auto my-2 text-center text-title">
          <h1 className="text-capitalize font-weight-bold">
            <strong className="text-themeOrange">Please add your Shop's Information....!!!</strong>
          </h1>
        </div>

        <form class="w3-container" onSubmit={this.handleSubmit}>
          {this.state.error && (
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          )}


          <label class="fieldsName">SHOP NAME</label>
          <input class="w3-input " type="text" name="name" value={this.state.name} onChange={this.handleChange} type="text" />

          <label class="fieldsName">state</label>
          <input class="w3-input " type="text" name="state" value={this.state.state} onChange={this.handleChange} type="text" />

          <label class="fieldsName">CITY</label>
          <input class="w3-input " type="text" name="city" value={this.state.city} onChange={this.handleChange} type="text" />

          <label class="fieldsName">location</label>
          <input class="w3-input " type="text" name="location" value={this.state.location} onChange={this.handleChange} type="text" />


          <label class="fieldsName">CONTACT NUMBER</label>
          <input class="w3-input " type="text" name="phone" value={this.state.phone} onChange={this.handleChange} type="text" />

          <label class="fieldsName">ADDRESS</label>
          <textarea name="address" value={this.state.address} onChange={this.handleChange}>Enter your address in detail</textarea>

          <tr> <td class="selectCategories">
            <label class="fieldsName">TYPE OF CLOTHS</label>
            <p class="textBoxOptionsForFirst">
              <input class="w3-check" type="checkbox" value="Male" name="Male" onChange={this.handleChange} />
              <label>Male</label></p>

            <p class="textBoxOptions">
              <input class="w3-check" type="checkbox" value="Female" name="Female" onChange={this.handleChange} />
              <label>Female</label></p>

            <p class="textBoxOptions">
              <input class="w3-check" type="checkbox" value="Kids" name="Kids" onChange={this.handleChange} />
              <label>Kids</label></p>

          </td>
            <td class="selectCategories">
              <label class="fieldsName">SELECT AVAILABLE CATEGORIES</label>
              <Multiselect
                options={categories}
                onSelectOptions={this.result}
                value={this.state.categories}
              // onChange={this.handleChange}
              />

            </td>
          </tr>

          <label class="fieldsName">OPENING TIME</label>
          <input class="w3-input" type="text" name="openingTime" value={this.state.openingTime}
            onChange={this.handleChange} type="text" />

          <label class="fieldsName">CLOSING TIME</label>
          <input class="w3-input" type="text" name="closingTime" value={this.state.closingTime}
            onChange={this.handleChange} type="text" />

          <label class="fieldsName">OFFER TITLE</label>
          <input class="w3-input" type="text" name="offerTitle" value={this.state.offerTitle}
            onChange={this.handleChange} type="text" />

          <label class="fieldsName">OFFER DESCRIPTION</label>
          <textarea name="offerDesc" value={this.state.offerDesc}
            onChange={this.handleChange}></textarea>

          <tr>
            <td class="parkingAndUploadSection">
              <label class="fieldsName">UPLOAD SHOP PHOTOS</label>
              <p>
                <input class="uploadPhotoStyle" type="file" onChange={e => this._handleImageChange(e)} />
              </p>
            </td>

            <td class="parkingAndUploadSection">
              <label class="fieldsName">PARKING AVAILABLE</label>
              <p class="textBoxOptionsForFirst">
                <input class="w3-radio" type="radio" name="parkingAvail" value="yes" onChange={this.handleChange} />
                <label> Yes</label>
              </p>
              <p class="textBoxOptions">
                <input class="w3-radio" type="radio" name="parkingAvail" value="no" onChange={this.handleChange} />
                <label>No</label>
              </p>
            </td>

            <td class="parkingAndUploadSection">
              <label class="fieldsName">CHANGING ROOM AVAILABLE</label>
              <p class="textBoxOptionsForFirst">
                <input class="w3-radio" type="radio" name="changingRoomAvail" value="yes" onChange={this.handleChange} />
                <label> Yes</label>
              </p>
              <p class="textBoxOptions">
                <input class="w3-radio" type="radio" name="changingRoomAvail" value="no" onChange={this.handleChange} />
                <label>No</label>
              </p>
            </td>

          </tr>

          <tr>
            <td colspan="9" align="center">
              <input class="submitAndReset" type="submit" value="Save My Data" />

              <input class="submitAndReset" type="reset" value="Reset Data" />
            </td>
          </tr>
          <div class="bottomSpace"></div>

        </form>

      </div>

      /* <table class="tableView" >
        <caption>Registration form</caption>

      
 
        
    
        <tr>
          <td colspan="2" align="center">
            <input type="submit" value="Save My Data" />

            <input type="reset" value="Reset Data" />
          </td>
        </tr>
      </table> */

    );
  }
}

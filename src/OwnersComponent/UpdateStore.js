import React, { Component } from "react";
import { StoreConsumer } from "../StoreContext";
import { Buttoncontainer } from "../components/Button";
import Multiselect from "multiselect-dropdown-react";
import {Link} from 'react-router-dom';
import './UpdateStore.css';


const categories = [
  {
    name: "Casual Shirts",
    value: "Casual Shirts"
  },
  {
    name: "Formal Shirts",
    value: "Formal Shirts"
  },
  {
    name: "T-Shirts",
    value: "T-Shirts"
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
    value: "Formal Trousers"
  },
  {
    name: "Casual Trousers",
    value: "Casual Trousers"
  },
  {
    name: "Kurtas ans Suits",
    value: "Kurtas ans Suits"
  },
  {
    name: "Ethnic Dresses",
    value: "Ethnic Dresses"
  },
  {
    name: "Skirts and Palazzos",
    value: "Skirts and Palazzos"
  },
  {
    name: "Sarees and Blouses",
    value: "Sarees and Blouses"
  },
  {
    name: "Dresses and Jumpsuits",
    value: "Dresses and Jumpsuits"
  },
  {
    name: "Tops",
    value: "Tops"
  }
];

export default class UpdateStore extends Component {
  state = {
    edit: false,
    file: "",
    id: "",
    photoUrl: "",
    name: "",
    state: "",
    city: "",
    phone: "",
    location: "",
    address: "",
    openingTime: "",
    closingTime: "",
    type: "",
    categories: "",
    offerTitle: "",
    offerDesc: "",
    parkingAvail: false,
    changingRoomAvail: false,
    Error: ""
  };
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  result(params) {
    console.log(params);
  }
  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    if (!this.state.edit) {
      return (
        <div className="updateStoreContainer">
          <from>
            <h className="infoHeader">Location</h>
            <br />
            <h className="updateStoreFieldName">Detail Address: <label className="updateStoreValue">{this.props.shopsDetail.address} </label></h>
            <br />
            <h className="updateStoreFieldName">Location: <label className="updateStoreValue">{this.props.shopsDetail.location} </label></h>
            <br />
            <h className="updateStoreFieldName">State: <label className="updateStoreValue">{this.props.shopsDetail.state} </label></h>
            <br />
            <h className="updateStoreFieldName">City: <label className="updateStoreValue">{this.props.shopsDetail.city} </label></h>
            <br />

            <br />

            <h className="infoHeader">Details</h>
            <br />
            <h className="updateStoreFieldName">Contact Number: <label className="updateStoreValue">{this.props.shopsDetail.phone} </label></h>
            <br />
            <h className="updateStoreFieldName">Opening Timing: <label className="updateStoreValue">{this.props.shopsDetail.openingTime} </label></h>
            <br />
            <h className="updateStoreFieldName">Closing Timing: <label className="updateStoreValue">{this.props.shopsDetail.closingTime} </label></h>
            <br />
            <h className="updateStoreFieldName">Clothes avaliable for: <label className="updateStoreValue">{this.props.shopsDetail.type} </label></h>
            <br />
            <h className="updateStoreFieldName">Catgories: <label className="updateStoreValue">{this.props.shopsDetail.categories} </label></h>
            <br />
            <h className="updateStoreFieldName">Offer Currently: <label className="updateStoreValue">{this.props.shopsDetail.offerTitle} </label></h>
            <br />
            <h className="updateStoreFieldName">Changing room facility avaliable: <label className="updateStoreValue">{(this.props.shopsDetail.changingRoomAvail) ? "Yes" : "No"} </label></h>
            <br />
            <h className="updateStoreFieldName">Parking avaliable: <label className="updateStoreValue">{(this.props.shopsDetail.parkingAvail) ? "Yes" : "No"} </label></h>
            <br />
            <br />
            <Buttoncontainer
              onClick={() => {
                this.setState({ edit: true });
              }}
            >
              Edit
                  </Buttoncontainer>
            &nbsp;&nbsp;&nbsp;
                  <Buttoncontainer Delete>Remove Shop</Buttoncontainer>
                  &nbsp;&nbsp;&nbsp;
                  <Link to="/addProduct">
                  <Buttoncontainer>
                    Add Products
                  </Buttoncontainer>
                  </Link>
          </from>
        </div>
      );
    } else {
      return (
        <div className="editStoreOuter  mx-auto col-md-4 ">
          <form class=" updateStoreFormContainer">


            <label class="fieldsName">SHOP NAME</label>
            <input class="w3-input " type="text" name="ShopName" value={this.props.shopsDetail.name} onChange={this.handleChange} type="text" />

            <label class="fieldsName">STATE</label>
            <input class="w3-input " type="text" name="State" value={this.props.shopsDetail.state} onChange={this.handleChange} type="text" />

            <label class="fieldsName">CITY</label>
            <input class="w3-input " type="text" name="city" value={this.props.shopsDetail.city} onChange={this.handleChange} type="text" />

            <label class="fieldsName">LOCATION</label>
            <input class="w3-input " type="text" name="Location" value={this.props.shopsDetail.location} onChange={this.handleChange} type="text" />


            <label class="fieldsName">CONTACT NUMBER</label>
            <input class="w3-input " type="text" name="Location" value={this.state.phone} onChange={this.handleChange} type="text" />


            {/* <label class="fieldsName">CONTACT NUMBER</label>
                  <input class="w3-input " type="text" name="Location" value={this.state.Location} onChange={this.handleChange} type="text" /> */}

            <label class="fieldsName">ADDRESS</label>
            <textarea name="DetailAddress" value={this.state.address} onChange={this.handleChange}>Enter your address in detail</textarea>

            <tr> <td class="selectCategories">
              <label class="fieldsName">TYPE OF CLOTHS</label>
              <p class="textBoxOptionsForFirst">
                <input class="w3-check" type="checkbox" value="Male" name="type" value={this.state.type} onChange={this.handleChange} />
                <label>Male</label></p>

              <p class="textBoxOptions">
                <input class="w3-check" type="checkbox" value="Female" name="type" value={this.state.type} onChange={this.handleChange} />
                <label>Female</label></p>

              <p class="textBoxOptions">
                <input class="w3-check" type="checkbox" value="Kids" name="type" value={this.state.type} onChange={this.handleChange} />
                <label>Kids</label></p>

            </td>
              <td class="selectCategories">
                <label class="fieldsName">SELECT AVAILABLE CATEGORIES</label>
                <Multiselect
                  options={categories}
                  onSelectOptions={this.result}
                  value={this.state.categories}
                  onChange={this.handleChange}
                />

              </td>
            </tr>

            <label class="fieldsName">OPENING HOURS</label>
            <input class="w3-input" type="text" name="OpeningHours" value={this.state.OpeningHours}
              onChange={this.handleChange} type="text" />



            <label class="fieldsName">SHOP DESCRIPTION</label>
            <textarea name="Description" value={this.state.Description}
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
                  <input class="w3-radio" type="radio" name="Parking" value="yes" checked={this.state.Parking === "yes"} onChange={this.handleChange} />
                  <label> Yes</label>
                </p>
                <p class="textBoxOptions">
                  <input class="w3-radio" type="radio" name="Parking" value="no" checked={this.state.Parking === "no"} onChange={this.handleChange} />
                  <label>No</label>
                </p>
              </td>

              <td class="parkingAndUploadSection">
                <label class="fieldsName">CHANGING ROOM AVAILABLE</label>
                <p class="textBoxOptionsForFirst">
                  <input class="w3-radio" type="radio" name="changingRoom" value="yes" checked={this.state.changingRoom === "yes"} onChange={this.handleChange} />
                  <label> Yes</label>
                </p>
                <p class="textBoxOptions">
                  <input class="w3-radio" type="radio" name="ParchangingRoomking" value="no" checked={this.state.changingRoom === "no"} onChange={this.handleChange} />
                  <label>No</label>
                </p>
              </td>

            </tr>

            <tr>
              <Buttoncontainer
                onClick={() => {
                  console.log("save clicked")
                }}
              >
                save
                    </Buttoncontainer>
            </tr>
            <div class="bottomSpace"></div>

          </form>


        </div>
      );
    }

  }
}

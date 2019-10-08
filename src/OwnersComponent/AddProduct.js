import React, { Component } from "react";
import Multiselect from "multiselect-dropdown-react";
import styled from "styled-components";
import "../ShopComponent/AddShop.css";
import Service from '../api/Service';
import Cookie from 'universal-cookie';
const Size = [
  {
    name: "S",
    value: "S"
  },
  {
    name: "M",
    value: "M"
  },
  {
    name: "L",
    value: "L"
  },
  {
    name: "XL",
    value: "XL"
  },
  {
    name: "XXL",
    value: "XXL"
  },
  {
    name: "XXXL",
    value: "xXXL"
  }
];

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

export default class AddProduct extends Component {
  state = {
    name: "",
    file: "",
    photoUrl: "",
    category: "",
    type: "",
    sizes: [],
    originalPrice: "",
    discount: "",
    Error: "",
    description: ""
  };
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }
  resultCategories = (params) => {
    console.log(params);
    this.setState({category:params[0]});
  }

  resultSizes=(params) => {
    this.setState({sizes:params});
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    if ((target.type === "type") && (target.name === "parkingAvail")) {  
        this.setState({ type: target.value });
    } else {
    this.setState({
      [name]: value
    });
  }
  }

  _handleImageChange = async (e) => {
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
    console.log("inside handleSubmit");

    const reqBody = {
      name : this.state.name,
      description : this.state.description,
      type : this.state.type,
      category : this.state.category,
      sizes : this.state.sizes.join(","),
      photoUrl: this.state.photoUrl,
      originalPrice: this.state.originalPrice,
      discount: this.state.discount,
      inWish: false
    }
    const cookie = new Cookie();
    const resp = await Service.post("/addProduct/"+cookie.get('shopId'),reqBody);
    console.log(resp);
    if (resp.data.success) {
      this.props.history.push("/storeDetail");
    }

    return this.setState({ error: "" });
  }

  render() {
    return (
      <ProductForm>
        <div class="w3-card-4">

          <div className="col-10 mx-auto my-2 text-center text-title">
            <h1 className="text-capitalize font-weight-bold">
              <strong className="text-themeOrange">Please Enter Products Information...!!!</strong>
            </h1>
          </div>
          <form class="w3-container" onSubmit={this.handleSubmit}>
            <label class="fieldsName">NAME</label>
            <input class="w3-input " type="text" name="name" value={this.state.name} onChange={this.handleChange} />

            <label class="fieldsName">PRICE</label>
            <input class="w3-input " type="text" name="originalPrice" value={this.state.originalPrice} onChange={this.handleChange} />

            <label class="fieldsName">DISCOUNT</label>
            <input class="w3-input " type="text" name="discount" value={this.state.discount} onChange={this.handleChange} />

            <label class="fieldsName">PRODUCT DESCRIPTION</label>
            <textarea name="description" value={this.state.description} onChange={this.handleChange}></textarea>
            <tr>
              <td class="parkingAndUploadSection">
                <label class="fieldsName">CLOTH TYPE</label>
                <p class="textBoxOptionsForFirst">
                  <input class="w3-radio" type="radio" name="type" value="Men" onChange={this.handleChange} />
                  <label>Men</label>
                </p>
                <p class="textBoxOptions">
                  <input class="w3-radio" type="radio" name="type" value="Women" onChange={this.handleChange} />
                  <label>Women</label>
                </p>
                <p class="textBoxOptions">
                  <input class="w3-radio" type="radio" name="type" value="Kids" onChange={this.handleChange} />
                  <label>Kids</label>
                </p>
              </td>
            </tr>
            <tr>
              <td><label class="fieldsName">SELECT AVAILABLE CATEGORIES</label>
                <Multiselect
                  options={categories}
                  onSelectOptions={this.resultCategories}
                  // value={this.state.categories}
                  // onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label class="fieldsName">SELECT AVAILABLE SIZES</label>
                <Multiselect
                  options={Size}
                  onSelectOptions={this.resultSizes}
                  // value={this.state.sizes}
                  // onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td class="parkingAndUploadSection">
                <label class="fieldsName">UPLOAD SHOP PHOTOS</label>
                <p>
                  <input class="uploadPhotoStyle" type="file" onChange={e => this._handleImageChange(e)} />
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





        {/* <div className="conatiner py-5">
          <div className="Product-form row">
            <form fclassName="shop-form" onSubmit={this.handleSubmit}>
              {this.state.error && (
                <h3 data-test="error" onClick={this.dismissError}>
                  <button onClick={this.dismissError}>✖</button>
                  {this.state.error}
                </h3>
              )}
              <table border="1" align="center" width="400" bgcolor="#CCCCCC">
                <tr>
                  <th>Product Name</th>

                  <td>
                    <input
                      type="text"
                      name="Name"
                      value={this.state.Name}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>

                <tr>
                  <th>Type of cloth</th>

                  <td>
                    Male
                    <input
                      type="checkbox"
                      name="type"
                      value="Male"
                      value={this.state.type}
                      onChange={this.handleChange}
                    />
                    &nbsp; Female
                    <input
                      type="checkbox"
                      name="type"
                      value="Female"
                      value={this.state.type}
                      onChange={this.handleChange}
                    />
                    &nbsp; Kids
                    <input
                      type="Checkbox"
                      name="type"
                      value="Kids"
                      value={this.state.type}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>

                <tr>
                  <th>select category</th>

                  <td>
                    <Multiselect
                      options={categories}
                      onSelectOptions={this.result}
                      value={this.state.categories}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>

                <tr>
                  <th>Opening Hours</th>

                  <td>
                    <Multiselect
                      options={Size}
                      onSelectOptions={this.result}
                      value={this.state.sizes}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Price</th>

                  <td>
                    <input
                      type="text"
                      name="Price"
                      value={this.state.Price}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Discount in %</th>

                  <td>
                    <input
                      type="text"
                      name="Discount"
                      value={this.state.Discount}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>

                <tr>
                  <th>Product Description</th>

                  <td>
                    <textarea
                      rows="5"
                      cols="20"
                      value={this.state.Description}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Upload Shop photo</th>

                  <td>
                    <input
                      type="file"
                      onChange={e => this._handleImageChange(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td colspan="2" align="center">
                    <input type="submit" value="Save My Data" />

                    <input type="reset" value="Reset Data" />
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </div> */}
      </ProductForm>
    );
  }
}
const ProductForm = styled.div`
.Product-form{
    margin: 55px 450px 0px;
  border-bottom-left-radius: 100px;
}
`;

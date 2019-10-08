import React, { Component } from "react";
import { Buttoncontainer } from "../components/Button";
import { ProductConsumer } from "../context";
import Multiselect from "multiselect-dropdown-react";
import './EditProduct.css';

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

export default class EditProduct extends Component {
  state = {
    Size: "",
    Discount: "",
    Price: "",
    Description: ""
  };
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }
  result(params) {
    console.log(params);
  }

  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            title,
            img,
            info,
            price,
            size,
            Discount
          } = value.detailProduct;
          if (value.Edit === false) {
            return (
              <div  className="editProductContainer">
                <h4  className="PriceLbl">
                  <strong>
                    Price: <span className="RupeeSys">  &#8377;</span>
                    <span  className="Amount"> {price}  </span>
                  </strong>
                  
                  </h4>
                  
                  <p className="descriptionView">
                  <strong className="descriptionLbl">
                  Description:
                  </strong>
                  <p className="description">{info}</p>
                  </p>
                  
                   <h3 className="sizeLbl" ><strong>Size:</strong> <span className="sizeAvail">{size}</span> </h3>
                {/*buttons */}
                <div className="addList">
                  <Buttoncontainer className="ButtonView"
                    onClick={() => {
                      value.EnableEdit();
                    }}>
                    Edit
                  </Buttoncontainer>
                  &nbsp;&nbsp;&nbsp;
                  <Buttoncontainer className="secondButton" Delete>Delete</Buttoncontainer>
                </div>
              </div>
            );
          } else {
            return (
              <div className="  mx-auto col-md-4 ">
                <form  class="updateStoreFormContainer" >

                <label class= "fieldsName">Size:</label>
                <Multiselect class="sizeMultipleSelect"
                   options={Size}
                   onSelectOptions={this.result}
                   value={this.state.Size}
                   onChange={this.handleChange}
                />
                <label class= "fieldsName">Discount:</label>
                <input class="w3-input " type="text" name="Discount"  value={this.state.Discount} onChange={this.handleChange} type="text"/>

                <label class= "fieldsName">Price:</label>
                <input class="w3-input " type="text" name="Price"  value={this.state.price} onChange={this.handleChange} type="text"/>
                  
                <label class= "fieldsName">DESCRIPTION</label>
<textarea name="Description"  value={this.state.info}
                  onChange={this.handleChange}></textarea>
                  
                  <div class="bottomSpace"></div>
                
                  {/*buttons */}
                  <Buttoncontainer
                    onClick={() => {
                      value.SaveChanges();
                    }}
                  >
                    Save
                  </Buttoncontainer>
                </form>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

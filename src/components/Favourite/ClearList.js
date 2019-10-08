import React from 'react'
import {Link} from 'react-router-dom';
export default function ClearList({value}) {
    const {clearList}=value;
  return (
    <React.Fragment>
    <div className="container">
    <div className="row">
        <div className="col-10 mt-2 ml-sn-5 ml-nd-auto col-sn-0
        text-capitalize text-right
        ">
        <Link to="/">
            <button className="btn btn-outline-denger text-uppercase
            mb-3 px-5"
            type="button"
            onClick={()=>clearList()}
            >
            clear cart
            </button>
        </Link>
        </div>
    </div>  
    </div>
    </React.Fragment>
  )
}

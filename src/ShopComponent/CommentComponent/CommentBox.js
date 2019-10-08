import React, { Component } from "react";
import CommentList from "./CommentList";
import $ from "jquery";
import { CommentsList } from "./CommentData";
import styled from "styled-components";
import axios from 'axios';
import Cookie from 'universal-cookie';


export default class CommentBox extends Component {
  state = {
    data: [],
    ratings: 1,
    commentText:""
  };
 
  insertComment= async ()=> {
    console.log(this.state);
    const cookie = new Cookie();
   const username = cookie.get('user').data.name;
    const reqBody = {
      ratings: this.state.ratings,
      commentText: this.state.commentText,
      userName: username
    }

    const resp = await axios.post("http://localhost:8090/api/shop/addComment/"+this.props.shopId,reqBody);
    if(resp.data.success){
      this.loadCommentList();
    }
  }


  

  handleChange = (e) => {
    let target = e.target;
    let name = target.name;

      this.setState({
        [name]: target.value
      });
  }

  loadCommentList = async () => {
    const resp = await axios.get("http://localhost:8090/api/shop/getCommentByShopId/"+this.props.shopId);
    console.log(resp);
    this.setState({data : resp.data.data});
  }

   componentDidMount = () => {
   this.loadCommentList();
   
  }

  getStar = () => {
    switch (this.state.ratings) {
      case 1:
        return (<ratingsStyle>
          <div className="rate-Sec">
            <img src="starSelect.png" onClick={() => {this.setState({ratings:1})}} />
            <img src="starUnselect.png" onClick={() => {this.setState({ratings:2})}} />
            <img src="starUnselect.png" onClick={() => {this.setState({ratings:3})}} />
            <img src="starUnselect.png" onClick={() => {this.setState({ratings:4})}} />
            <img src="starUnselect.png" onClick={() => {this.setState({ratings:5})}} /> 
          </div>
        </ratingsStyle>);
        break;
      case 2:
      return (<ratingsStyle>
        <div className="rate-Sec">
          <img src="starSelect.png" onClick={() => {this.setState({ratings:1})}} />
          <img src="starSelect.png" onClick={() => {this.setState({ratings:2})}} />
          <img src="starUnselect.png" onClick={() => {this.setState({ratings:3})}} />
          <img src="starUnselect.png" onClick={() => {this.setState({ratings:4})}} />
          <img src="starUnselect.png" onClick={() => {this.setState({ratings:5})}} /> 
        </div>
      </ratingsStyle>);
        break;
      case 3:
      return (<ratingsStyle>
        <div className="rate-Sec">
          <img src="starSelect.png" onClick={() => {this.setState({ratings:1})}} />
          <img src="starSelect.png" onClick={() => {this.setState({ratings:2})}} />
          <img src="starSelect.png" onClick={() => {this.setState({ratings:3})}} />
          <img src="starUnselect.png" onClick={() => {this.setState({ratings:4})}} />
          <img src="starUnselect.png" onClick={() => {this.setState({ratings:5})}} /> 
        </div>
      </ratingsStyle>);
        break;
      case 4:
      return (<ratingsStyle>
        <div className="rate-Sec">
          <img src="starSelect.png" onClick={() => {this.setState({ratings:1})}} />
          <img src="starSelect.png" onClick={() => {this.setState({ratings:2})}} />
          <img src="starSelect.png" onClick={() => {this.setState({ratings:3})}} />
          <img src="starSelect.png" onClick={() => {this.setState({ratings:4})}} />
          <img src="starUnselect.png" onClick={() => {this.setState({ratings:5})}} /> 
        </div>
      </ratingsStyle>);
        break;
      case 5:
      return (<ratingsStyle>
        <div className="rate-Sec">
          <img src="starSelect.png" onClick={() => {this.setState({ratings:1})}} />
          <img src="starSelect.png" onClick={() => {this.setState({ratings:2})}} />
          <img src="starSelect.png" onClick={() => {this.setState({ratings:3})}} />
          <img src="starSelect.png" onClick={() => {this.setState({ratings:4})}} />
          <img src="starSelect.png" onClick={() => {this.setState({ratings:5})}} /> 
        </div>
      </ratingsStyle>);
        break;
    }
  };

  render() {
    return (
      <div className="comment-box">
        {this.getStar()}
        <div className="comment-form">
          <textarea
            placeholder="You have a comment ? *"
            className="textarea"
            name="commentText" value={this.state.commentText}
            onChange={this.handleChange}
          />
          <span className="erro">
            * The comment field is mandatory ;)
          </span>
          <button onClick={this.insertComment} className="btn">
            Comment
          </button>
        </div>
        <CommentList comments={this.state.data} />
      </div>
    );
  }


  
}


const ratingsStyle = styled.div`
   .rate-Sec img{
    height:35px
    width:35px;
  } 
  .rate-Sec{
    margin-left:420px
  }
`;
import React, { Component } from 'react'
import CommentBox from './CommentComponent/CommentBox'
import Styled from 'styled-components'

export default class Review extends Component {
  render() {
    return (
      <CommStyle>
      <div>

         <CommentBox shopId={this.props.shopId}/>
      </div>
      </CommStyle>
    )
  }
}
const CommStyle=Styled.div`

.link {
  text-decoration: none;
  color: #fff;
  -webkit-transition: color .3s;
  transition: color .3s;
}

.link:hover {
  color: #ccc;
}

.comment-box {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-left: 200px; 
  margin-top: 10px; 
  
}

.comment {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
  margin: 5px 0;
  padding: 10px;
  
	-webkit-animation: show .5s ease;
	        animation: show .5s ease;
}

@-webkit-keyframes show {
    0% { -webkit-transform: translateX(-100%); transform: translateX(-100%) }
  100% { -webkit-transform: translateX(0px); transform: translateX(0px) }
}

@keyframes show {
    0% { -webkit-transform: translateX(-100%); transform: translateX(-100%) }
  100% { -webkit-transform: translateX(0px); transform: translateX(0px) }
}

.avatar {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
  overflow: hidden;
}

.name {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  font-size: 14px;
  font-weight: bold;
  height: 40px;
  background-color: #f7f7f7;
  padding: 10px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
}

.text {
  width: calc(100% - 60px);
  background-color: #fff;
  margin-top: -15px;
  margin-left: 60px;
  padding: 20px 10px;
  font-weight: 400;
  font-size: 16px;
  border: 1px solid #f7f7f7;
}

.comment-form {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
  padding: 5px
  align-content:left
}

.input-text {
  border: 1px solid #f7f7f7;
  padding: 10px;
  margin: 5px 0;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  height: 40px;
}

.textarea {
  border: 1px solid #f7f7f7;
  height: 100px;
  padding: 10px;
  margin: 5px 0;
  width: calc(100% - 60px);
  margin-left: 60px;
  border-color:#777777;
}

.btn {
  border: 0;
  background-color: #96d400;
  color: #fff;
  padding: 10px 20px;
  margin: 5px 0;
  margin-left: auto;
  -webkit-transition: background-color .3s;
  transition: background-color .3s;
}

.btn:hover {
  background-color: #a6e905;
}

.erro {
  display: none;
  color: #FF9797;
  margin-left: 60px;
	-webkit-animation: error .2s ease;
	        animation: error .2s ease;
}

@-webkit-keyframes error {
    0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes error {
    0% { opacity: 0; }
  100% { opacity: 1; }
}
`
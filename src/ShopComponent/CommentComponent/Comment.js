import React, { Component } from 'react'

export default class Comment extends Component {
  render() {
    return (
        <div className="comment">
            <div>
                <img src="user.png" className="avatar"/>
            </div>
            
            <div className="name">
                {this.props.userName}
            </div>
            <div>
              {this.props.ratings} <i className="fas fa-star" style={{color:"#FDB425"}}/>
            </div>
            <div className="text">
                {this.props.children}
            </div>
      </div>

    )
  }
}

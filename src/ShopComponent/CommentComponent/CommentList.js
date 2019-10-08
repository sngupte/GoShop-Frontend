import React, { Component } from 'react'
import Comment from './Comment'
export default class CommentList extends Component {
  render() {
    const commentNodes = this.props.comments.map(function(comment) {
        return (
          <Comment key={comment.id} userName={comment.userName} ratings={comment.ratings} avatarUrl={comment.avatarUrl}>
            {comment.commentText}
          </Comment>
        );
      });
      return (
        <div>
          {commentNodes}
        </div>
    )
  }
}

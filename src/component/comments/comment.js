import React, { Component } from 'react';

class Comment extends Component {
    render() {
        return (
            <div classNameName="jumbotron">
              <h1 classNameName="display-3">comments</h1><br/>
              <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username"
                      aria-describedby="basic-addon2"/>
              <div className="input-group-append">
              <button className="btn btn-primary" type="button">Go!</button>
              </div>
               
            </div>
                            <div>
                                <h6 classNameName="my-0">Product name</h6>{/* 이미 달려있는 댓글 */}
                                <small classNameName="text-muted">Brief description</small>
                            </div>
                            <span classNameName="text-muted">$12</span>
            </div>
        );
    }
}

export default Comment;
import React, { Component } from 'react';
import Comment from '../comments/comment';

class Detail extends Component {
    render() {
        return (
            <div>
                <div className="container py-5 mb5">
                    <div className="jumbotron">
                        <h1 className="display-3"> 업무일지 제목 </h1>
                        <p className="lead">내용</p>
                         <hr className="my-4"/>
                        <p>작성자 정보</p>
                        <p className="lead">
                        <a className="btn btn-primary" href="#!" role="button"> 작성자 정보 보러가기</a>
                        </p>
                    </div>
                <Comment/>
                </div>
            </div>
        );
    }
}

export default Detail;
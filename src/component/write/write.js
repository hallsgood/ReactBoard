import React, { Component } from 'react';

class Write extends Component {
    //<textarea className="form-control"></textarea>

    //  height: 500px;

    render() {
        return (
            <div> 
      <div className="container py-5 mb5">
            <h1 className="mb-5">Write board</h1>
            <div className="row py-4">
            <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Option</span>
                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
    <label className="btn btn-outline-primary">
      <input type="checkbox" /> important
    </label>
  </div>
                    </h4>
                    <ul className="list-group mb-3">
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                        <input className="form-control" type="date" id="example-date-input"/>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                        <select className="custom-select">
  <option >업무 유형을 선택</option>
  <option value="1">일간 업무</option>
  <option value="2">회의 일지</option>
  <option value="3">출장 일지</option>
</select>
                        </li>
                       
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                        <select className="custom-select">
  <option>소속을 선택</option>
  <option value="1">인사</option>
  <option value="2">재무</option>
  <option value="3">개발</option>
  <option value="4">영업</option>
  <option value="5">생산</option>
  <option value="6">R &amp;D</option>
</select>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                           
                        </li>
                    </ul>
       
                    <a href="#!" className="btn btn-primary btn-block">Block level button</a>
                </div>




{/* 여기서부터 폼 */}


                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Please Write Your 업무일즤써듀셈</h4>
                   
                        <div className="mb-3">
                            <label>Id 업무일지 작성자</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input type="text" className="form-control" id="username" placeholder="Username" required/>
                                <div className="invalid-feedback" >
                                    Your username is required.
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label>업무 내용 </label>
                        <textarea className="textarea form-control"></textarea>
                            
                        </div>


                </div>
            </div>
        </div>
            </div>


        );
    }
}

export default Write;
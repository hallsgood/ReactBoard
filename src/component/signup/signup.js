import React, { Component } from 'react';
import Contract from './contract';

class Signup extends Component {
    state = {
        userid : '',
        username : '',
        pw1 : '',
        pw2 : '',
        useremail : '',
        dept : '',
    }
    handleChange = (e)=>{               //값을 받아서 여기 state에 넣음
        const { value } = e.target
        console.log(value);
        
        this.setState({
            ...this.state,
            [e.target.name] : value,
        })
        
    }

    signUpSubmit =  () =>{
        
    }

    render() {
        console.log(this.state);
        
        return (

            <div>

            <div className="container py-5 mb5">
            <h1 className="mb-5">Sign Up</h1>
            <div className="row py-4">
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                        <span className="badge badge-primary badge-pill">3</span>
                    </h4>
                    <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Product name</h6>
                                <small className="text-muted">Brief description</small>
                            </div>
                            <span className="text-muted">$12</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Second product</h6>
                                <small className="text-muted">Brief description</small>
                            </div>
                            <span className="text-muted">$8</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Third item</h6>
                                <small className="text-muted">Brief description</small>
                            </div>
                            <span className="text-muted">$5</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>$20</strong>
                        </li>
                    </ul>
    
                            
                            
                    <a href="#!" className="btn btn-primary btn-block">Submit</a>
                            
                        
    
                </div>
    
    
                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Please Write Your information</h4>
                    <form className="needs-validation" >
                    <div className="mb-3">
                            <label>Id </label>
                            <div className="input-group">
                                <input type="text" className="form-control" onChange={this.handleChange} name="userid" placeholder="Username" required/>
                                <div className="invalid-feedback" >
                                    Your username is required.
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label>name </label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input type="text" className="form-control" onChange={this.handleChange} name="username" placeholder="Username" required/>
                                <div className="invalid-feedback" >
                                    Your username is required.
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label>pw</label>
                                <input type="text" className="form-control" onChange={this.handleChange} name="pw1" placeholder="" required/>
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>pw2</label>
                                <input type="text" className="form-control" onChange={this.handleChange} name="pw2" placeholder=""  required/>
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </div>
    
    
                        <div className="mb-3">
                            <label>Email <span className="text-muted">(Optional)</span></label>
                            <input type="email" className="form-control" onChange={this.handleChange} name="useremail" placeholder="you@example.com"/>
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>



                        <div className="mb-3">
            <label>소속 부서</label>
            <select className="custom-select d-block w-100" onChange={this.handleChange} name="dept" required>
            <option>소속을 선택</option>
  <option value="1">인사</option>
  <option value="2">재무</option>
  <option value="3">개발</option>
  <option value="4">영업</option>
  <option value="5">생산</option>
  <option value="6">R &amp;D</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
            </div>
          </div>
                    </form>
                </div>
            </div>
        </div>
        <Contract/>
    </div>
        );
    }
}

//유효성검사






export default Signup;
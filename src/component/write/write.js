import React, { Component } from 'react';
import axios from 'axios'
class Write extends Component {
    state = { 
        //id : '',
        title : '',
        context : '',
    }
    handleChange = (e)=>{
        const {value} = e.target
        this.setState({
            ...this.state,
            [e.target.name]:value,
        })
        console.log(this.state);
        
    }
    boardInsert = ()=>{
        axios.post('/boardwrite',{
            headers: { 
                'Content-type': 'application/x-www-form-urlencoded',
             },
            params : {
                title : this.state.title,
                context : this.state.context,
            }
        }).then(()=>{
            console.log(this);
            
            console.log(`front insert success 여기서 다음페이지로 넘기는 것 호출`)
        }).catch(()=>{
            console.log(this);
            
        })
    }

    render() {
        let date = new Date();
        return (
            <div> 
      <div className="container py-5 mb5">
            <h1 className="mb-5">Write board</h1>
            <div className="row py-4">
            <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Option</span>
          
                    </h4>
                    <ul className="list-group mb-3">
                    <li className="list-group-item d-flex justify-content-between">
          <span>소속</span>
          <strong> 내가바로 인사팀</strong>
        </li>
                        <li className="list-group-item d-flex justify-content-between">
          <span>직급</span>
          <strong>사장쓰</strong>
        </li>
                       
                        <li className="list-group-item d-flex justify-content-between">
          <span>작성일</span>
          <strong>{date.getFullYear()}.{date.getMonth()+1}.{date.getDate()} {date.getHours()}시 {date.getMinutes()}분</strong>
        </li>
                        <li className="list-group-item d-flex justify-content-between">
          <span>writer</span>
          <strong>id</strong>
        </li>
                    </ul>
                    <button type="button" className="btn btn-primary"onClick={this.boardInsert}>
  Popover on bottom
</button>
                    {/* <button onClick={this.boardInsert} className="btn btn-primary btn-block" value="submit"/> */}
                </div>




{/* 여기서부터 폼 */}


                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Please Write Your 업무일즤써듀셈</h4>
                   
                        <div className="mb-3">
                            <label>제목쓰</label>
                            <input className="form-control"onChange={this.handleChange} type="text" name="title" placeholder="Title" id="example-text-input"/>
                        </div>
                        <div className="mb-3">
                            <label>업무 내용 </label>
                        <textarea onChange={this.handleChange} className="textarea form-control" name="context" placeholder="contents"></textarea>
                            
                        </div>


                </div>
            </div>
        </div>
            </div>


        );
    }
}

export default Write;
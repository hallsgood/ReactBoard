import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './bootstrap4-neon-glow.css'
import './bootstrap4-neon-glow.min.css'
import axios from 'axios'
import Home from './component/home/home'
import Navbar from './component/navbar/navbar';
import Signup from './component/signup/signup';
import Write from './component/write/write';
import List from './component/board_list/list';
import Detail from './component/detail/detail';
import Footer from './component/footer/footer';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      result: [],
    }
  }
  state = {
    result : [],
  }

  async componentDidMount() {
    
    let result = await axios.get('/test')
   console.log(result);
   
    this.setState({ result :result.data })
  }

 

  render() {

    const { result } = this.state
    console.log(result);
    
    // const getuserid = result.map((value,key)=>{
    //   return <div key={key}>
    //     <h5>id {value.userid} name {value.username}</h5>
    //   </div>
    // })
  
    return (
      <div>
        {/* <h1>app.js</h1> */}
        {/* {getuserid} */}
        <BrowserRouter>
        <Navbar/>
          <Switch>
            
            <Route exact path='/' component={Home}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/write' component={Write}/>
            <Route exact path='/list' component={List}/>
            <Route exact path='/detail' component={Detail}/>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </div>
      )
  }
}




  export default App;
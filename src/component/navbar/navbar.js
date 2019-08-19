import React from 'react';

export function Navbar(props) {
    return (
        <div className="navbar-dark text-white">
    <div className="container">
      <nav className="navbar px-0 navbar-expand-lg navbar-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a href="/" className="pl-md-0 p-3 text-light">HOME</a>
            <a href="/signUp" className="p-3 text-decoration-none text-light">Sign Up</a>
            <a href="/mypage" className="p-3 text-decoration-none text-light">My Page</a>
            
            <a href="/list" className="p-3 text-decoration-none text-light">Board List</a>
            <a href="/write" className="p-3 text-decoration-none text-light">write</a>
            <a href="/detail" className="p-3 text-decoration-none text-light">detail</a>
          </div>
          
        </div>
        <form className="form-inline">
  <label className="sr-only" >Username</label>      {/* for="inlineFormInputGroup" */}
  <div className="input-group mb-2 mr-sm-2 mb-sm-0">
    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="id"/>
    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="passward"/>
  </div>

  <button type="submit" className="btn btn-primary">Go</button>
</form>
      </nav>

    </div>
  </div>
    );

}
export default Navbar
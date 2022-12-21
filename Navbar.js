import React from 'react'

const navbar = () => {
  return (
    <div>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">ShopShoes</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
    </ul>
  </div>
  <form className="d-flex">
     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
     <button className="btn btn-outline-success" type="submit">Search</button>
   </form> 
</nav>
   
</div>
  )
}

export default navbar

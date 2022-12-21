import React, {useState} from 'react'
// import data from "./data";

const Shop = () => {

  const [ price, setPrice ] = useState(2000);

  const handleInput = (e)=>{
    setPrice( e.target.value );
  }

  return (
  <>
  
  <h1 className='text-center text-danger text-capitalize my-5'>Good Shoes Take You Good Places</h1>
    <hr/>
    <div className='menu-tab container'>
      <div className='menu-tab d-flex justify-content-around'>
      <input type="range" onInput={ handleInput } />
      <h1>Price: { price }</h1>
      <div>
      </div>
      </div>
    </div>

  <div className="menu-items container-fluid mt-5">
  <div className="row">
  <div className="col-sm"><div className="card" >
  <img className="card-img-top" src="https://api.lorem.space/image/shoes?w=640&h=480&r=1890" alt="Card image cap" height="270px"/>
  <div className="card-body">
    <h5 className="card-title">ASIAN Men's Hattrick-09 Sports</h5>
    <h4 className="card-title">Price: 2000</h4>
    <p className="card-text">Running,Walking & Gym Shoes for Eva Sole Extra Jump Lightweight Casual Sneaker Shoes Men's & Boy's</p>
    <div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Add To Cart</button>
  <button class="btn btn-secondary" type="button">Add To Wishlist</button>
</div>
    
  </div>
</div></div>
  <div className="col-sm"><div className="card" >
  <img className="card-img-top" src="https://api.lorem.space/image/shoes?w=640&h=480&r=1891" alt="Card image cap" height="270px"/>
  <div className="card-body">
    <h5 className="card-title">ASIAN Men's Rider-01</h5>
    <h4 className="card-title">Price: 2000</h4>
    <p className="card-text">Men Shoes for Running with Breathable Knitted Upper | Ideal for Sports, Gym, Training, Running & Much More </p>
    <div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Add To Cart</button>
  <button class="btn btn-secondary" type="button">Add To Wishlist</button>
</div>
  </div>
</div></div>
  <div className="col-sm"><div className="card" >
  <img className="card-img-top" src="https://api.lorem.space/image/shoes?w=640&h=480&r=1892" alt="Card image cap" height="270px"/>
  <div className="card-body">
    <h5 className="card-title">ASIAN Men's Neo-01</h5>
    <h4 className="card-title">Price: 1000</h4>
    <p className="card-text">Sports Running Shoes for Men with Beads Technology & EVA Sole for Extra Jump | Ideal for Sports, Gym</p>
    <div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Add To Cart</button>
  <button class="btn btn-secondary" type="button">Add To Wishlist</button>
</div>
  </div>
</div></div>
  </div>
</div>

<div className="menu-items container-fluid mt-5">
  <div className="row">
  <div className="col-sm"><div className="card" >
  <img className="card-img-top" src="https://api.lorem.space/image/shoes?w=640&h=480&r=1893" alt="Card image cap" height="270px"/>
  <div className="card-body">
    <h5 className="card-title">ASIAN Men's Neo-06</h5>
    <h4 className="card-title">Price: 1000</h4>
    <p className="card-text">Sports Running Shoes for Men with Beads Technology & EVA Sole for Extra Jump</p>
    <div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Add To Cart</button>
  <button class="btn btn-secondary" type="button">Add To Wishlist</button>
</div>
  </div>
</div></div>
  <div className="col-sm"><div className="card" >
  <img className="card-img-top" src="https://api.lorem.space/image/shoes?w=640&h=480&r=1894" alt="Card image cap" height="270px"/>
  <div className="card-body">
    <h5 className="card-title">ASIAN Wonder-11</h5>
    <h4 className="card-title">Price: 500</h4>
    <p className="card-text">Sports Running Shoes for Men with Beads Technology & EVA Sole for Extra Jump</p>
    <div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Add To Cart</button>
  <button class="btn btn-secondary" type="button">Add To Wishlist</button>
</div>
  </div>
</div></div>
  <div className="col-sm"><div className="card" >
  <img className="card-img-top" src="https://api.lorem.space/image/shoes?w=640&h=480&r=1895" alt="Card image cap" height="270px"/>
  <div className="card-body">
    <h5 className="card-title">ASIAN Wonder-19</h5>
    <h4 className="card-title">Price: 500</h4>
    <p className="card-text">Sports Running Shoes for Men with Beads Technology & EVA Sole for Extra Jump</p>
    <div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Add To Cart</button>
  <button class="btn btn-secondary" type="button">Add To Wishlist</button>
</div>
  </div>
</div></div>
  </div>
</div>

<div className="menu-items container-fluid mt-5">
  <div className="row">
  <div className="col-sm"><div className="card" >
  <img className="card-img-top" src="https://api.lorem.space/image/shoes?w=640&h=480&r=1896" alt="Card image cap" height="270px"/>
  <div className="card-body">
    <h5 className="card-title">ASIAN Magic-19</h5>
    <h4 className="card-title">Price: 800</h4>
    <p className="card-text">Sports Running Shoes for Men with Beads Technology & EVA Sole for Extra Jump.</p>
    <div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Add To Cart</button>
  <button class="btn btn-secondary" type="button">Add To Wishlist</button>
</div>
  </div>
</div></div>
  <div className="col-sm"><div className="card" >
  <img className="card-img-top" src="https://api.lorem.space/image/shoes?w=640&h=480&r=1897" alt="Card image cap" height="270px"/>
  <div className="card-body">
    <h5 className="card-title">ASIAN Magic-88</h5>
    <h4 className="card-title">Price: 800</h4>
    <p className="card-text">Sports Running Shoes for Men with Beads Technology & EVA Sole for Extra Jump.</p>
    <div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Add To Cart</button>
  <button class="btn btn-secondary" type="button">Add To Wishlist</button>
</div>
  </div>
</div></div>
  <div className="col-sm"><div className="card" >
  <img className="card-img-top" src="https://api.lorem.space/image/shoes?w=640&h=480&r=1898" alt="Card image cap" height="270px"/>
  <div className="card-body">
    <h5 className="card-title">ASIAN Legend</h5>
    <h4 className="card-title">Price: 800</h4>
    <p className="card-text">Sports Running Shoes for Men with Beads Technology & EVA Sole for Extra Jump.</p>
    <div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Add To Cart</button>
  <button class="btn btn-secondary" type="button">Add To Wishlist</button>
</div>
  </div>
</div></div>
  </div>
</div>
  </>
  )
}


export default Shop;
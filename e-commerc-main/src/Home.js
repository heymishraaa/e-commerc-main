import React from 'react'
import "./Home.css"
import Product from './Product';

function Home() {
  return (
    <div className="home"> 
      <div className="home_container">
        <img className='home_image' src={require("./istockphoto-498301640-1024x1024.jpg")} 
         alt="" 
        />
        <div className='home_row'>
            <Product 
             id="100000"
             title="The Lean Startup" 
             price={29.99} 
             image="https://m.media-amazon.com/images/I/41+ZsplOPWL._SY445_SX342_.jpg" 
             rating={3}/>
            <Product
             id="100001"
             title="Harry Potter: and the Prisoner of Azkaban - Gryffindor Edition"
             price={19.99}
             image="https://m.media-amazon.com/images/I/4148eudPKmL._SY445_SX342_.jpg"
             rating={5} />
        </div>
        <div className='home_row'>
            <Product
             id="100002"
             title="Harry Potter: and the Philosopher's Stone - Gryffindor Edition"
             price={19.99}
             image="https://m.media-amazon.com/images/I/81yA0EpKucL._SY522_.jpg"
             rating={5} />
            <Product
             id="100003"
             title="Harry Potter: and the Chamber of Secrets - Gryffindor Edition"
             price={19.99}
             image="https://m.media-amazon.com/images/I/51LBatXrSkL._SY445_SX342_.jpg"
             rating={5} />
            <Product
             id="100004"
             title="Harry Potter: and the Goblet of Fire - Gryffindor Edition"
             price={19.99}
             image="https://m.media-amazon.com/images/I/41Pce2XCYrL._SY445_SX342_.jpg"
             rating={5} />
        </div>
        <div className='home_row'>
            <Product
             id="100005"
             title="Harry Potter: and the Order of the Phoenix - Gryffindor Edition"
             price={19.99}
             image="https://m.media-amazon.com/images/I/41K3RcliRDL._SY445_SX342_.jpg"
             rating={5} />
             <Product
             id="100006"
             title="Harry Potter: and the Half-Blood Prine - Gryffindor Edition"
             price={19.99}
             image="https://m.media-amazon.com/images/I/51xa23rkJSL._SY445_SX342_.jpg"
             rating={5} />
        </div>
        <div className='home_row'>
        <Product
             id="100006"
             title="Harry Potter: and the Deathly Hallows - Gryffindor Edition"
             price={19.99}
             image="https://m.media-amazon.com/images/I/8137pZnQAVL._SY522_.jpg"
             rating={5} />
        </div>

        </div>
    </div>
  );
}

export default Home;

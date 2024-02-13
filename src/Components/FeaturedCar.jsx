import React from 'react'
import CarData from './CarInfo';

const FeaturedCar = () => {
  return (
    <div className='feature-div' id='featured-car'>
       <div className='head-desc'>
        <span>
         Checkout the Featured Cars
      </span>
      <h1>
         Featured Cars
      </h1>
      <div className='newcar-border'></div>
      </div>
       
      <div className='feature-card-div'>
        {
            CarData.map ((val) => {
                return (
                   <div key={val.id} className='fearure-car-flex'>
                       <div className='fearure-card'>
                       <div className='feature-img-div'>
                        <img src={val.img_scr} alt="car" className='feature-img'/>
                        </div>
                        <div className='car-model'>
                            Model : {val.model}
                        </div>
                        </div>
                        <div>
                            <h4 className='feature-head'>{val.heading}</h4>
                            <h5 className='feature-price'>{val.price}</h5>
                            <p className='feature-desc'>{val.desc}</p>
                        </div>
                   </div>
                )
            })
        }
      </div>

    </div>
  )
}

export default FeaturedCar;

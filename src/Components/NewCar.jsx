import React, { useState, useEffect } from 'react'
import img1 from '../Components/images/new-cars-model/ncm1.png';
import img2 from '../Components/images/new-cars-model/ncm2.png';
import img3 from '../Components/images/new-cars-model/ncm3.png';

const Data = [
  {
    id : 1,
    img_src : img1,
    heading : "Chevrolet Camaro ZA100",
    desc : "The Chevrolet Camaro ZA100, a high-performance variant, boasts a potent V8 engine, exceptional agility, and a distinctive design. With its powerful performance, aerodynamic enhancements, and driver-focused interior, this special edition delivers a thrilling driving experience coveted by automotive enthusiasts."
  },
  {
    id : 2,
    img_src : img2,
    heading : "BMW Series-3 Wagon",
    desc : "The BMW Series-3 Wagon combines luxury and versatility. Known for its sleek design and spacious interior, it offers a perfect blend of performance and practicality. With advanced technology, comfortable seating, and ample cargo space, it's an ideal choice for those seeking both style and functionality in a luxury vehicle."
  },
  {
    id : 3,
    img_src : img3,
    heading : "Ferrari 488 Superfast",
    desc : "The Ferrari 488 Superfast embodies pure speed and luxury. Featuring a powerful V8 engine, it delivers blistering acceleration and top-tier performance. Its aerodynamic design, advanced handling, and opulent interior make it a pinnacle of automotive excellence, defining the essence of a supercar."
  },
]
const NewCar = () => {
  const [index, setIndex] = useState (0);
  const [fade, setFade] = useState (false);
  const [btn1Active, setBtn1Active] = useState (true);
  const [btn2Active, setBtn2Active] = useState (false);
  const [btn3Active, setBtn3Active] = useState (false);
  const btn1 = () => {
    setFade (true);
    setBtn1Active (true);
    setBtn2Active (false);
    setBtn3Active (false);
    setTimeout (() => {
      setIndex (0);
      setFade (false);
    },50);
  };
  const btn2 = () => {
    setFade (true);
    setBtn1Active (false);
    setBtn2Active (true);
    setBtn3Active (false);
    setTimeout (() => {
      setIndex (1);
      setFade (false);
    },50);
  };
  const btn3 = () => {
    setBtn1Active (false);
    setBtn2Active (false);
    setBtn3Active (true);
    setFade (true);
    setTimeout (() => {
      setIndex (2);
      setFade (false);
    },50);
  };
  useEffect( () => {
    const interval = setInterval ( () => {
      setIndex(prevIndex => {
        if (prevIndex < 2) {
            return prevIndex + 1;
        } else {
            return 0;
        }
    });
    },5000);
    return () => clearInterval(interval);
},[index]);
useEffect(() => {
  if (index === 0) {
      setBtn1Active(true);
      setBtn2Active(false);
      setBtn3Active(false);
  } else if (index === 1) {
      setBtn1Active(false);
      setBtn2Active(true);
      setBtn3Active(false);
  } else {
      setBtn1Active(false);
      setBtn2Active(false);
      setBtn3Active(true);
  }
}, [index]);

  return (
    <div className='NewCar-div' id='new-car'>
        <div className='head-desc'>
        <span>
         Checkout the Latest Cars
      </span>
      <h1>
         Newest Cars
      </h1>
      <div className='newcar-border'></div>
      </div>
       <div className={`slider-div ${fade ? 'fade-out' : 'fade-in'}`}>
          <div>
            <img src={Data[index].img_src} className='slider-img'/>
          </div>
          <div className='slider-text'>
            <h1 className='slider-head'>
               {Data[index].heading}
            </h1>
            <p className='slider-desc'>
               {Data[index].desc}
            </p>
            <button type='button' className='home-btn newcar-btn'>View Details</button>
          </div>
       </div>
       <div className='circle-div'>
       <div className={`circle ${btn1Active ? 'active-btn' : ''}`} onClick={btn1}></div>
       <div className={`circle ${btn2Active ? 'active-btn' : ''}`} onClick={btn2}></div>
       <div className={`circle ${btn3Active ? 'active-btn' : ''}`} onClick={btn3}></div>
       </div>
    </div>
  )
}

export default NewCar

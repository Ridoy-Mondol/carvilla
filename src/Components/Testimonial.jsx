import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import img1 from '../Components/images/clients/c1.png'
import img2 from '../Components/images/clients/c2.png'
import img3 from '../Components/images/clients/c3.png'

const Data = [
    {
      id: 1,
      img_src: img1,
      Name: "Jackson Anderson",
      Address: "New York",
      Review: "Carvilla's service was exceptional! Found the perfect car within my budget—smooth process, thrilled with my new ride!"
    },
    {
      id: 2,
      img_src: img2,
      Name: "Madison Williams",
      Address: "Washington",
      Review: "Carvilla trully stood out. With a Great range of cars and top-notch service. Found my dream car—fantastic experience."
    },
    {
      id: 3,
      img_src: img3,
      Name: "Carter Thompson",
      Address: "London",
      Review: "Absolutely perfect! The cake was a delightful taste and a stunning edible art piece, highly recommended for any special occasion!"
    },
  ];

  
const Testimonial = (props) => {
    const [hover, setHover] = useState(null);
  const hoverIn = (id) => {
    setHover (id);
  }
  const hoverOut = () => {
    setHover (null);
  }
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1051 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1050, min: 768 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1,
        },
      };
  return (
    <div className='testimoni-desc' id='testimonial'>
      <div className='head-desc'>
      <h1>
          What Our Clients Say
      </h1>
      <div className='newcar-border'></div>
      </div>

      
      <div className='testimoni-carousel-div'>
      <Carousel
      className="testimonial-carousel"
      // swipeable={false}
      // draggable={false}
      showDots={true}
      // customDot={<CustomDot />}
      responsive={responsive}
      infinite={true}
      // autoPlay={props.deviceType !== "mobile" ? true : false}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      // customTransition="all 0.5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      deviceType={props.deviceType}
      dotListClass="react-multi-carousel-dot-list"
      itemClass="carousel-item-padding-40-px"
      >
        {
            Data.map((val,index)=> {
                return (
               <div className='card testimoni-card' key={index} onMouseEnter={() => hoverIn (val.id)} onMouseLeave={hoverOut}>
                  <img src={val.img_src} alt='icon' />
                  <span className= 'service-text'>{val.Review}</span>
                  <span className={hover === val.id ? "testimoni-hover" : "testimoni-head"}>{val.Name}</span>
                  <span className={hover === val.id ? "testimoni-hover testimoni-address-hover" : "testimoni-head testimoni-address"}>{val.Address}</span>
                  
               </div>
                )
            })
        }
      </Carousel>
      </div>
    </div>
  )
}

export default Testimonial

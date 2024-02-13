import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../Components/images/brand/br1.png';
import img2 from '../Components/images/brand/br2.png';
import img3 from '../Components/images/brand/br3.png';
import img4 from '../Components/images/brand/br4.png';
import img5 from '../Components/images/brand/br5.png';
import img6 from '../Components/images/brand/br6.png';

const Data = [
    {
        id : 1,
        img_src : img1
    },
    {
        id : 2,
        img_src : img2
    },
    {
        id : 3,
        img_src : img3
    },
    {
        id : 4,
        img_src : img4
    },
    {
        id : 5,
        img_src : img5
    },
    {
        id : 6,
        img_src : img6
    },
]
const Brands = (props) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1051 },
          items: 6,
        },
        tablet: {
          breakpoint: { max: 1050, min: 768 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 2,
        },
      };  
  return (
    <div className='brand-div' id='brand'>
       <Carousel
      className="testimonial-carousel-brand"
    //   showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlay={props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={5000}
      keyBoardControl={true}
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
                   <div key={index} className='brand'>
                      <img src={val.img_src} alt='brands'className='brand-img'/>
                   </div>
                )
            })
        }
      </Carousel>
    </div>
  )
}

export default Brands

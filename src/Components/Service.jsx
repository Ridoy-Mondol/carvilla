import React, { useState } from 'react'
import icon1 from '../Components/images/Icons/electric-car.png';
import icon2 from '../Components/images/Icons/maintenance.png';
import icon3 from '../Components/images/Icons/car-insurance.png';

const Data = [
    {
        id : 1,
        heading : "Largest Dealership of Car",
        text : "Discover the ultimate car haven: your destination for the widest range of top-quality vehicles.",
        icon : "fa-solid fa-car",
    },
    {
        id : 2,
        heading : "Unlimited Repair Warrenty",
        text : "Experience confidence on the road with our unbeatable warranty, offering limitless repairs for you.",
        icon : "fa-solid fa-car-burst",
    },
    {
        id : 3,
        heading : "Insurence Support",
        text : "Your safety shield: Benefit from our comprehensive insurance support for hassle-free protection.",
        icon : "fa-solid fa-car-on",
    },
]
const InputData = [
    {
        heading : "Select Year",
        option1 : "Year",
        option2 : 2024,
        option3 : 2023,
        option4 : 2022,
    },
    {
        heading : "Select Make",
        option1 : "Make",
        option2 : "Toyota",
        option3 : "Holden",
        option4 : "Maecedes-Benz",
    },
    {
        heading : "Select Model",
        option1 : "Model",
        option2 : "Kia-Rio",
        option3 : "Mitsubishi",
        option4 : "Ford",
    },
    {
        heading : "Body Style",
        option1 : "Style",
        option2 : "Sedan",
        option3 : "Van",
        option4 : "Roadster",
    },
    {
        heading : "Car Condition",
        option1 : "Condition",
        option2 : "Brand New",
        option3 : "Used",
        option4 : "Reconditioned",
    },
    {
        heading : "Select Price",
        option1 : "Price",
        option2 : "$10,000",
        option3 : "$50,000",
        option4 : "$100,000",
    },
]
const Service = () => {
  const [hover, setHover] = useState(null);
  const hoverIn = (id) => {
    setHover (id);
  }
  const hoverOut = () => {
    setHover (null);
  }
  return (
    <div className='service-div' id='service'>
        <div className='service-input-div'>
            <div className='option-flex'>
            {
                InputData.map ((val,index) => {
                    return (
                        <div className='select-div' key={index}>
                            <p>{val.heading}</p>
                            <select className='select'>
                                <option value={val.option1}>{val.option1}</option>
                                <option value={val.option2}>{val.option2}</option>
                                <option value={val.option3}>{val.option3}</option>
                                <option value={val.option4}>{val.option4}</option>
                            </select>
                        </div>
                    )
                })
            }
          </div>
          <div className='service-btn-div'>
          <button type='button' className='home-btn service-btn'>Search</button>
          </div>
        </div>

        <div className='service-card'>
        {
            Data.map((val,index)=> {
                return (
               <div className={`card ${val.id === 3 ? "card-left" : ""}`} key={index} onMouseEnter={() => hoverIn (val.id)} onMouseLeave={hoverOut}>
                  <i class={val.icon}></i>
                  <span className={hover === val.id ? "head-hover" : "service-head"}>{val.heading}</span>
                  <span className= 'service-text'>{val.text}</span>
                  <span className={hover ===val.id ? "hover-service-border" : 'service-border'}></span>
                  
               </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Service

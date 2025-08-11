import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData=[
    {
        imgUrl:weatherImg,
        title:'Personalized Recommendations ',
        desc:"Suggest destinations based on user preferences.",
    },
    {
        imgUrl:guideImg,
        title:'Nearby Attractions Finder',
        desc:"Show must-visit spots around a selected destination.",
    },
    {
        imgUrl:customizationImg,
        title:'User Reviews & Ratings',
        desc:"Display authentic reviews and ratings from other travelers.",
    },
];

const ServiceList = () => {
  return <>
  {servicesData.map((item,index)=>(
        <Col lg="3" key ={index}>
            <ServiceCard item={item} />
    </Col>
  ))}
  </>
  
}

export default ServiceList
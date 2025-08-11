import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="container">
            <Slider {...settings}>
                <div className="testimonial py-4 px-3">
                    <p>
                    "This platform made trip planning effortless! No more endless Google searches—just click on a destination, and all the must-visit places pop up. Super convenient!"                    </p>
                    <div className="d-flex align-items-center gap-4 mt-3">
                        <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                        <div>
                            <h6 className="mb-0 mt-3">James D</h6>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial py-4 px-3">
                    <p>
                    "Travel Hub feels like having a personal travel assistant. The recommendations were spot on, and I saved so much time!                    </p>
                    <div className="d-flex align-items-center gap-4 mt-3">
                        <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                        <div>
                            <h6 className="mb-0 mt-3">Andrew T</h6>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial py-4 px-3">
                    <p>
                    "Absolutely love how Travel Hub recommends hidden gems near my destination! I discovered a cozy little café in Paris that I would have never found on my own. Highly recommend!"                    </p>
                    <div className="d-flex align-items-center gap-4 mt-3">
                        <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                        <div>
                            <h6 className="mb-0 mt-3"> Sarah L.</h6>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial py-4 px-3">
                    <p>
                    "I was skeptical at first, but the smart recommendations really work! Found some incredible offbeat places in Bali that weren’t on mainstream blogs. Game changer!"                    </p>
                    <div className="d-flex align-items-center gap-4 mt-3">
                        <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                        <div>
                            <h6 className="mb-0 mt-3">Rickson</h6>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial py-4 px-3">
                    <p>
                    "Loved the seamless experience! I clicked on Rome, and within seconds, I had a list of must-see spots nearby. No need for multiple tabs anymore!"                     </p>
                    <div className="d-flex align-items-center gap-4 mt-3">
                        <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                        <div>
                            <h6 className="mb-0 mt-3">Priyajot S</h6>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial py-4 px-3">
                    <p>
                    Travel Hub made my trip planning effortless! I clicked on Paris, and instantly, I got a list of hidden gems nearby—no need to search manually. Found an amazing little bookstore and a stunning rooftop café with the best views. Highly recommended!"                    </p>
                    <div className="d-flex align-items-center gap-4 mt-3">
                        <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                        <div>
                            <h6 className="mb-0 mt-3">Jamie Joseph</h6>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>

                
            </Slider>
        </div>
    );
};

export default Testimonials;

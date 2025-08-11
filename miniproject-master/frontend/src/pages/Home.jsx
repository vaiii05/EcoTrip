import React from "react";
import "../styles/home.css";
import { Container, Col, Row } from "reactstrap"; 
import heroImg from "../assets/images/hero-img01.jpg"; 
import heroImg02 from "../assets/images/hero-img02.jpg"; 
import heroVideo from "../assets/images/hero-video.mp4"; 
import worldImg from "../assets/images/world.png"; // 
import Subtitle from "../shared/Subtitle"; // 
import "../styles/home.css";
import SearchBar from "../shared/SeachBar";
import experienceImg from "../assets/images/experience.png";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";
import NearbyAttractions from "../NearbyAttraction/NearbyAttractions";


const Home = () => {
  return (
    <>
      {/*======= Hero Section Start =======*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitles d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="World Icon" />
                </div>
                <h1>
                  Travelling opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                <center>"Discover. Explore. Experience." ✈️🌍</center>
                
                <center>Welcome to <b>TRAVEL HUB</b> your smart travel companion!</center>
              <br />
              Get personalized destination recommendations tailored just for you.
                Explore top-rated attractions and hidden gems worldwide.
                Plan your dream trip effortlessly with expert travel insights.
                Create unforgettable memories with seamless travel planning.                <br />
              
                  
                  
                  
                </p>
              </div>
            </Col>
              <Col lg ='2'>
                <div className="hero__img-box">
                  <img src ={heroImg} alt=""/>
                </div>
                </Col>
                <Col lg ='2'>
                <div className="hero__img-box mt-4">
                  <video src ={heroVideo} alt="" controls />
                </div>
                </Col>
                <Col lg ='2'>
                <div className="hero__img-box mt-5">
                  <img src ={heroImg02} alt=""/>
                </div>
                </Col>
              
            <SearchBar/>
          </Row>
        </Container>
      </section>
      {/*============ Hero Section End =========*/}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
            <h5 className="services__subtitle">what we serve</h5>
            <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList/>
          </Row>
        </Container>
      </section>


      {/*==============featured tour section start=============*/}
        <section>
          <Container>
            <Row>
              <Col lg ="12" className="mb-5">
                <Subtitle subtitle={"Explore"} />
                <h2 className="featured__tour-title">Hidden gems of India</h2>
              </Col>
              <FeaturedTourList limit={9} /> 
            </Row>
          </Container>
        </section>

      {/*==============featured tour section end=============*/}
{/*============== Experience Section Start =============*/}
<section>
  <Container>
    <Row>
      <Col lg="6">
        <div className="experience__content">
          <Subtitle subtitle={"Experience"} />
          <hr />
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#333" }}>
            With all our experiences <br /> we will serve you
          </h2>
          
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              fontWeight: "1000",
              textAlign: "justify",
              color: "#555",
            }}
          >
            <center style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#222" }}>
              Experience the Best with TRAVEL HUB! 🌍✨
            </center>
            <br />
            TRAVEL HUB is your personal travel companion, offering beyond just basic recommendations. 
            Our system analyzes your interests, location, and preferences to curate the best hidden gems 
            near your selected destination. Whether you're looking for historical landmarks, secret beaches, 
            cultural spots, or thrilling adventure activities, we've got you covered.  
            <br /><br />
            No need to waste time endlessly browsing multiple websites—our AI-powered recommendation system
            instantly presents must-visit places tailored to your preferences. 
            From underrated scenic spots to offbeat local experiences, TRAVEL HUB ensures a seamless, 
            exciting, and enriching journey every time. 🚀🏝️
          </p>
        </div>
            <hr />
      
      </Col>
      <Col lg="6">
        <div className="experience__img">
          <img src={experienceImg} alt="Experience" style={{ width: "100%", borderRadius: "10px" }} />
        </div>
        
      </Col>
    </Row>
  </Container>
</section>
{/*============== Experience Section End =============*/}
            




      {/*==============gallery section start =============*/}
        <section>
          <Container>
            <Row>
              <Col lg='10'>
              <Subtitle subtitle ={'Gallery'}/>
              <h2 className="gallery_title">Discover Journeys Captured by Our Users</h2>
              <hr />
              </Col>
              <Col lg='12'>
              <MasonryImagesGallery />
              <hr />
              </Col>
            </Row>
          </Container>
        </section>

      {/*==============gallery section end =============*/}
      {/*==============testimonial section start =============*/}
        <section>
          <Container>
            <Row>
              <Col lg="12">
              <Subtitle subtitle={"Fans love"}/>
              <h2 className="testimonial__title">What our fans and users say about us</h2>
              <hr />
              </Col>
              <Col lg="12">
              <Testimonials />
              </Col>
            </Row>
          </Container>
        </section>



      {/*==============testimonial section end =============*/}
      <Newsletter />

    </>
  );
};

export default Home;

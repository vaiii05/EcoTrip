import React from 'react';
import './newsletter.css';

import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row className="align-items-center">
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Send your reviews and feedback to us! 📝</h2>
              <p>
                We’d love to hear from you! 💬 Share your experiences, suggestions, and feedback 
                to help us make Travel Hub even better. Your insights will help fellow travelers 
                discover incredible destinations. Drop your reviews now! 
              </p>
              <div className="newsletter__input">
                <input type="text" placeholder="Enter your feedback" />
                <button className="btn newsletter__btn">Send</button>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="Male Tourist" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;

import React, { useEffect } from "react";
import TourCard from "../../shared/TourCard";
import tourData from "../../assets/data/tours";
import { Col, Row, Container } from "reactstrap";
import "../../components/Featured-tours/FeaturedTourList.css";

const FeaturedTourList = ({ limit }) => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .featured__tour {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .featured__tour-item {
        background: #fff;
        border-radius: 15px;
        padding: 1.5rem;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        min-height: 420px;
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Apply limit if provided
  const displayedTours = limit ? tourData.slice(0, limit) : tourData;

  return (
    <Container>
      <Row className="featured__tour">
        {displayedTours.map((tour) => (
          <Col lg="3" md="4" sm="6" xs="12" className="mb-4 d-flex" key={tour.id}>
            <div className="featured__tour-item w-100">
              <TourCard tour={tour} />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedTourList;

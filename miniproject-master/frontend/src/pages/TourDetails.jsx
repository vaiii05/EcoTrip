import React, { useState, useEffect } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import calculateAvgRating from "../utlils/avgRating";

const TourDetails = () => {
  const { id } = useParams();
  const [nearbyAttractions, setNearbyAttractions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Find the current tour based on the URL parameter
  const tour = tourData.find((tour) => tour.id === String(id));

  useEffect(() => {
    if (tour && tour.coordinates) {
      fetchNearbyAttractions(tour.coordinates.lat, tour.coordinates.lon);
    }
  }, [tour]);

  const fetchNearbyAttractions = async (lat, lon) => {
    const apiKey = process.env.REACT_APP_OPENTRIPMAP_API_KEY;
    if (!apiKey) {
      console.error("API Key missing! Please check your .env file.");
      return;
    }

    const radius = 5000; // 5 km
    const limit = 5;
    const url = `https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${lon}&lat=${lat}&limit=${limit}&apikey=${apiKey}`;

    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      if (!data.features) {
        setNearbyAttractions([]);
        return;
      }

      // Fetch detailed info for each attraction to get the image
      const detailedAttractions = await Promise.all(
        data.features
          .filter((place) => place.properties.name)  // Filter unnamed places
          .map(async (place) => {
            const detailUrl = `https://api.opentripmap.com/0.1/en/places/xid/${place.properties.xid}?apikey=${apiKey}`;
            const detailRes = await fetch(detailUrl);
            const detailData = await detailRes.json();
            return {
              name: place.properties.name,
              image: detailData.preview?.source || null,
              description: detailData.wikipedia_extracts?.text || "No description available",
            };
          })
      );
      

      setNearbyAttractions(detailedAttractions);
    } catch (error) {
      console.error("Failed to fetch nearby attractions:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!tour) {
    return (
      <Container>
        <Row>
          <Col>
            <h2>Tour not found</h2>
          </Col>
        </Row>
      </Container>
    );
  }

  const { photo, title, desc, price, reviews } = tour;
  const { avgRating } = calculateAvgRating(reviews);

  return (
    <section className="tour-details-section">
      <Container>
        <Row className="tour-details-row">
          <Col lg="12" className="tour-details-col">
            <div className="tour__content">
              <img src={photo} alt={title} className="tour-image" />
              <h2 className="tour-title">{title}</h2>

              <div className="tour__rating">
                <i className="ri-star-fill" style={{ color: "#ffab00" }}></i>
                {avgRating === 0 ? "Not Rated" : avgRating} ({reviews?.length} reviews)
              </div>

              <div className="tour-description">
                <h5>Description</h5>
                <p>{desc}</p>
              </div>

              <div className="tour-price">
                <p><strong>Price:</strong> Rs {price} per person</p>
              </div>

              {/* ✅ Nearby Attractions with Images */}
              <div className="nearby-attractions mt-4">
                <h4>Nearby Attractions (Hidden Gems)</h4>
                {loading ? (
                  <p>Loading attractions...</p>
                ) : (
                  <Row>
                    {nearbyAttractions.length > 0 ? (
                      nearbyAttractions.map((place, index) => (
                        <Col md="4" sm="6" xs="12" key={index} className="mb-4">
                          <div className="attraction-card">
                            {place.image ? (
                              <img
                                src={place.image}
                                alt={place.name}
                                className="img-fluid rounded"
                                style={{ height: "200px", objectFit: "cover", width: "100%" }}
                              />
                            ) : (
                              <div className="no-image">No Image Available</div>
                            )}
                            <h6 className="mt-2">{place.name}</h6>
                            <p style={{ fontSize: "0.85rem" }}>{place.description}</p>
                          </div>
                        </Col>
                      ))
                    ) : (
                      <p>No nearby attractions found.</p>
                    )}
                  </Row>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TourDetails;

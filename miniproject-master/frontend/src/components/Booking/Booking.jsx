import React from 'react';
import { Link } from 'react-router-dom';
import tourData from '../../assets/data/tours.json';

const DestinationList = () => {
  return (
    <div className="destination-list">
      {tourData.map((tour) => (
        <div key={tour.id} className="destination-item">
          <Link to={`/tour-details/${tour.id}`}>
            <h3>{tour.title}</h3>
            <img src={tour.photo} alt={tour.title} className="tour-image" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DestinationList;

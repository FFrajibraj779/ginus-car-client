import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ singledata }) => {

  const { _id, img, price, title } = singledata;

  return (
    <div className="glass">
      <figure><img src={img} alt="car!" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>price:${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
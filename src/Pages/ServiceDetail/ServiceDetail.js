import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h1 className="text-center mt-5">Welcome to detail: {serviceId}</h1>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary mt-5">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;

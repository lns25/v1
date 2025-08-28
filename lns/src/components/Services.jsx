import React from "react";
import "./Services.css";

const services = [
  {
    title: "Renovation & Low-Cost Design",
    description:
      "High-quality renovation and budget-friendly design solutions for your home or office. We provide both 2D and 3D designs to help you visualize your space.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Furniture Services",
    description:
      "Custom and ready-made furniture to complement your new design. We can source or create sofas, beds, tables, and more to fit your style and budget.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Unique Painting Services",
    description:
      "Transform your space with our unique painting services. From accent walls to full-room makeovers, our team delivers a flawless finish.",
    image:
      "https://media.istockphoto.com/id/1277728419/photo/paint-roller-with-green-colour-on-painted-wooden-surface-chalk-board.webp?a=1&b=1&s=612x612&w=0&k=20&c=bBxsofgFGnGPjx-cCT4JCV6FXIpuBiysdTCJxfHq8iU=",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="additional-perks">
        <h3>All our services include:</h3>
        <ul>
          <li>1-Year Warranty</li>
          <li>Free Quotes & Estimations</li>
          <li>Pest Control</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;

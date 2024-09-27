import React, { useState, useEffect } from "react";
import farm1 from "../../../assets/wat 1.png";
import farm2 from "../../../assets/Group 271.png";
import farm3 from "../../../assets/Ellipse_12-removebg.png";

const images = [farm1, farm2, farm3];

const FarmCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-success p-2 rounded-4">
      <h5 className="text-white text-center">The automated land watering system</h5>
      <div className="d-flex justify-content-center align-items-center" style={{ height: "250px" }}>
        <div
          className="position-relative"
          style={{ width: "100%", display: "flex", justifyContent: "center", overflow: "hidden" }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                transition: "opacity 1s ease",
                opacity: index === currentIndex ? 1 : 0,
                width: "250px", 
                height: "auto",
              }}
            >
              <img src={image} alt={`Farm ${index}`} className="w-100 h-100" style={{ objectFit: "cover" }} />
              <p className="text-white text-center">Started at 5/07/2023</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FarmCard;
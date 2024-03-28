import React, { useState, useEffect } from "react";

const OurProject = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    const boxes = document.querySelectorAll(".box");
    setBoxes(boxes);
  }, []);

  const handleArrowKey = (event) => {
    if (isTransitioning) {
      return;
    }

    if (event.key === "ArrowRight") {
      setActiveIndex((prevIndex) => (prevIndex + 1) % boxes.length);
    } else if (event.key === "ArrowLeft") {
      setActiveIndex(
        (prevIndex) => (prevIndex - 1 + boxes.length) % boxes.length
      );
    }

    updateCurrentImg();
  };

  const handleBoxClick = (index) => {
    if (isTransitioning) {
      return;
    }

    if (index === activeIndex && boxes[index].classList.contains("expanded")) {
      boxes.forEach((box) => box.classList.remove("closed", "expanded"));
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
      updateCurrentImg();
    }
  };

  const updateCurrentImg = () => {
    setIsTransitioning(true);

    boxes.forEach((box, index) => {
      const isActive = index === activeIndex;
      box.classList.toggle("expanded", isActive);
      box.classList.toggle("closed", !isActive);
    });

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mt-16">
          <h4 className="wow fadeIn" data-wow-delay=".5s">
            Our
          </h4>
          <h3 className="wow color-font">PROJECT</h3>
        </div>
      </div>
      <div className="box-container">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`box ${index === activeIndex ? "expanded" : ""}`}
            onClick={() => handleBoxClick(index)}
          >
            <div className="overlay"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProject;

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../../../images/banner1.jpg";
import banner2 from "../../../images/banner2.png";
import banner3 from "../../../images/banenr3.jpg";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
          id="image-slider"
        />
        <Carousel.Caption>
          <h3 style={{ color: "#000" }}>Welcome to Travel Guru</h3>
          <p className="text-black">
            The use of traveling is to regulate imagination with reality <br />{" "}
            and instead of thinking of how things may be, see them as they are.
          </p>
          <button id="btn">Explore Package</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
          id="image-slider"
        />

        <Carousel.Caption>
          <h3 style={{ color: "#000" }}>Welcome to Travel Guru</h3>
          <p className="text-black">
            The use of traveling is to regulate imagination with reality <br />{" "}
            and instead of thinking of how things may be, see them as they are.
          </p>
          <button id="btn">Explore Package</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
          id="image-slider"
        />

        <Carousel.Caption>
          <h3 style={{ color: "#000" }}>Welcome to Travel Guru</h3>
          <p className="text-black">
            The use of traveling is to regulate imagination with reality <br />{" "}
            and instead of thinking of how things may be, see them as they are.
          </p>
          <button id="btn">Explore Package</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;

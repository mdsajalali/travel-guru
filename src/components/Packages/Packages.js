import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Packages.css";
import cardsData from "./data";

const Packages = () => {
  const [data, setData] = useState(cardsData);

  return (
    <div className="container">
      <h1 className="text-center pack-top">Packages</h1>
      <div className="packages">
        {data.map((item, id) => {
          const { title, img, text, place, people, perPerson, book } = item;
          return (
            <Card key={id} style={{ width: "22rem" }} className="package-card">
              <Card.Img className="pack-img" variant="top" src={img} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{place}</ListGroup.Item>

                <ListGroup.Item>{people}</ListGroup.Item>
                <ListGroup.Item>{perPerson}</ListGroup.Item>
              </ListGroup>
              <button className="book-btn">
                <Link className="book-underline" to="/successpage">
                  {book}
                </Link>
              </button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Packages;

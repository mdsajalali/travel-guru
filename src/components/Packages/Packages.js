import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Packages.css";

const Packages = () => {
  return (
    <div className="container">
      <h1 className="text-center pack-top">Packages</h1>
      <div className="packages">
        <Card style={{ width: "22rem" }} className="package-card">
          <Card.Img variant="top" src="https://i.ibb.co/QKmBvkx/kuakata.jpg" />
          <Card.Body>
            <Card.Title>MEDIUM 5-DAY TOUR</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Patuakhali</ListGroup.Item>
            <ListGroup.Item>20 people</ListGroup.Item>
            <ListGroup.Item>$550 per person</ListGroup.Item>
          </ListGroup>

          <button className="book-btn">
            <Link className="book-underline" to="/successpage">
              Book now
            </Link>
          </button>
        </Card>

        <Card style={{ width: "22rem" }} className="package-card">
          <Card.Img
            variant="top"
            src="https://i.ibb.co/Ybd2P4M/sundarban.jpg"
          />
          <Card.Body>
            <Card.Title>DIFFICULT 7-DAY TOUR</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cox's bazar</ListGroup.Item>

            <ListGroup.Item>25 people</ListGroup.Item>
            <ListGroup.Item>$700 per person</ListGroup.Item>
          </ListGroup>
          <button className="book-btn">
            <Link className="book-underline" to="/successpage">
              Book now
            </Link>
          </button>
        </Card>

        <Card style={{ width: "22rem" }} className="package-card">
          <Card.Img variant="top" src="https://i.ibb.co/KLXrNHR/jaflong.jpg" />
          <Card.Body>
            <Card.Title>MEDIUM 5-DAY TOUR</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              eius sint ducimus dolores hic accusamus.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Kuakatai</ListGroup.Item>

            <ListGroup.Item>15 people</ListGroup.Item>
            <ListGroup.Item>$500 per person</ListGroup.Item>
          </ListGroup>
          <button className="book-btn">
            <Link className="book-underline" to="/successpage">
              Book now
            </Link>
          </button>
        </Card>

        <Card style={{ width: "22rem" }} className="package-card">
          <Card.Img
            className="pack-img"
            variant="top"
            src="https://i.ibb.co/27Z99CM/Sajek.png"
          />
          <Card.Body>
            <Card.Title>MEDIUM 5-DAY TOUR</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Sajek</ListGroup.Item>
            <ListGroup.Item>20 people</ListGroup.Item>
            <ListGroup.Item>$750 per person</ListGroup.Item>
          </ListGroup>

          <button className="book-btn">
            <Link className="book-underline" to="/successpage">
              Book now
            </Link>
          </button>
        </Card>

        <Card style={{ width: "22rem" }} className="package-card">
          <Card.Img
            className="pack-img"
            variant="top"
            src="https://i.ibb.co/z2fvw0Z/Sreemongol.png"
          />
          <Card.Body>
            <Card.Title>DIFFICULT 7-DAY TOUR</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Sreemongol</ListGroup.Item>

            <ListGroup.Item>25 people</ListGroup.Item>
            <ListGroup.Item>$800 per person</ListGroup.Item>
          </ListGroup>
          <button className="book-btn">
            <Link className="book-underline" to="/successpage">
              Book now
            </Link>
          </button>
        </Card>

        <Card style={{ width: "22rem" }} className="package-card">
          <Card.Img
            className="pack-img"
            variant="top"
            src="https://i.ibb.co/0KQqm7g/sundorbon.png"
          />
          <Card.Body>
            <Card.Title>MEDIUM 5-DAY TOUR</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              eius sint ducimus dolores hic accusamus.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Sundorbon</ListGroup.Item>

            <ListGroup.Item>15 people</ListGroup.Item>
            <ListGroup.Item>$900 per person</ListGroup.Item>
          </ListGroup>
          <button className="book-btn">
            <Link className="book-underline" to="/successpage">
              Book now
            </Link>
          </button>
        </Card>
      </div>
    </div>
  );
};

export default Packages;

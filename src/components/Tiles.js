import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";
import Form from "react-bootstrap/Form";

function Tile() {
  const currentDate = new Date().toLocaleString();
  const [status, setStatus] = useState("");

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleDeleteTile = () => {
    console.log("Trash icon clicked");
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Carousel indicators={false} interval={null}>
          <Carousel.Item
            style={{
              backgroundColor: "lightgray",
              width: "100%",
              height: "10rem",
            }}
          >
            <Carousel.Caption>
              <h3>Task Title 1</h3>
              <Button variant="primary">VIEW</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            style={{
              backgroundColor: "darkgray",
              width: "100%",
              height: "10rem",
            }}
          >
            <Carousel.Caption>
              <h3>Task Title 2</h3>
              <Button variant="primary">VIEW</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            style={{
              backgroundColor: "gray",
              width: "100%",
              height: "10rem",
            }}
          >
            <Carousel.Caption>
              <h3>Task Title 3</h3>
              <Button variant="primary">VIEW</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="row">
          <div className="col-md-12">
            <Card.Text>
              Another section of text to demonstrate splitting the card body
              into two sections.
            </Card.Text>
          </div>
          <Form.Group controlId="status">
            <Form.Control
              as="select"
              value={status}
              onChange={handleStatusChange}
            >
              <option value="">Select status</option>
              <option value="pending">Live</option>
              <option value="pending">Pending</option>
              <option value="archived">Archived</option>
            </Form.Control>
          </Form.Group>
        </div>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <div>{currentDate}</div>
        <div onClick={handleDeleteTile}>
          <FaTrash />
        </div>
      </Card.Footer>
    </Card>
  );
}

export default Tile;

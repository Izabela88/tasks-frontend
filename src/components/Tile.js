import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { FaTrash } from "react-icons/fa";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Tile({ tile }) {
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
        <p>Actual status: {tile.status}</p>
        <Carousel indicators={false} interval={null}>
          {tile.tasks.map((task) => (
            <Carousel.Item
              style={{
                backgroundColor: "gray",
                width: "100%",
                height: "10rem",
              }}
              key={task.id}
            >
              <Carousel.Caption>
                <h3>{task.title}</h3>
                <Button variant="primary">VIEW</Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="row">
          <Form.Group controlId="status">
            <Form.Control
              as="select"
              value={status}
              onChange={handleStatusChange}
            >
              <option>Change status</option>
              <option value="pending">Live</option>
              <option value="pending">Pending</option>
              <option value="archived">Archived</option>
            </Form.Control>
          </Form.Group>
        </div>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <div>{currentDate}</div>
        <div style={{ cursor: "pointer" }} onClick={handleDeleteTile}>
          <FaTrash />
        </div>
      </Card.Footer>
    </Card>
  );
}

export default Tile;

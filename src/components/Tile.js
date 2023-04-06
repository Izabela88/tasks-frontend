import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { FaTrash } from "react-icons/fa";
import MyModal from "./Modal";
import { format } from "date-fns";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { GlobalContext } from "../context/GlobalState";

function Tile({ tile }) {
  const [status, setStatus] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [taskModal, setTaskModal] = useState(null);
  const { deleteTile } = useContext(GlobalContext);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleDeleteTile = () => {
    fetch(`http://localhost:8000/api/tiles/${tile.id}/`, { method: "DELETE" })
      .then((response) => deleteTile(tile.id))
      .catch((err) => {
        console.error(err.message);
      });
  };

  const handleModal = (task, show) => {
    setTaskModal(task);
    setModalShow(show);
  };

  const formattedTileDate = format(new Date(tile.created_at), "yyyy-MM-dd");

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <p>Current status: {tile.status}</p>
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
                <Button
                  onClick={() => handleModal(task, true)}
                  className="btn-outline-dark"
                >
                  VIEW
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
          <Carousel.Item
            style={{
              backgroundColor: "gray",
              width: "100%",
              height: "10rem",
            }}
          >
            <Carousel.Caption>
              <h3>Add Task</h3>
              <Button
                onClick={() => handleModal(null, true)}
                className="btn-outline-dark"
              >
                +
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <MyModal
          tile_id={tile.id}
          task={taskModal}
          show={modalShow}
          onHide={() => handleModal(null, false)}
        />
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
        <div>{formattedTileDate}</div>
        <div style={{ cursor: "pointer" }} onClick={handleDeleteTile}>
          <FaTrash />
        </div>
      </Card.Footer>
    </Card>
  );
}

export default Tile;

import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { FaTrash } from "react-icons/fa";
import MyModal from "./Modal";
import { formatISO9075 } from "date-fns";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { GlobalContext } from "../context/GlobalState";

function Tile({ tile }) {
  const [modalShow, setModalShow] = useState(false);
  const [taskModal, setTaskModal] = useState(null);
  const { deleteTile, updateTile } = useContext(GlobalContext);

  const handleDeleteTile = () => {
    fetch(`http://localhost:8000/api/tiles/${tile.id}/`, { method: "DELETE" })
      .then((response) =>
        response.ok ? deleteTile(tile.id) : Promise.reject(response)
      )
      .catch((err) => {
        console.error(err);
      });
  };

  const handleUpdateTileStatus = (status) => {
    fetch(`http://localhost:8000/api/tiles/${tile.id}/`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: status }),
    })
      .then((response) =>
        response
          .json()
          .then((data) =>
            response.ok ? updateTile(data, tile) : Promise.reject(data)
          )
      )
      .catch((err) => {
        console.error(err);
      });
  };

  const handleModal = (task, show) => {
    setTaskModal(task);
    setModalShow(show);
  };

  const formattedTileDate = formatISO9075(new Date(tile.created_at));

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
              onChange={(e) => {
                handleUpdateTileStatus(e.target.value);
              }}
            >
              <option>Change status</option>
              <option value="LIVE">Live</option>
              <option value="PENDING">Pending</option>
              <option value="ARCHIVED">Archived</option>
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

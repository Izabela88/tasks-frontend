import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { FaTrash } from "react-icons/fa";
import MyModal from "./Modal";
import { formatISO9075 } from "date-fns";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { GlobalContext } from "../context/GlobalState";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

function Tile({ tile }) {
  const [modalShow, setModalShow] = useState(false);
  const [taskModal, setTaskModal] = useState(null);
  const { deleteTile, updateTile, refreshTaskTypes, deleteTask } =
    useContext(GlobalContext);

  const handleDeleteTile = () => {
    fetch(`http://localhost:8000/api/tiles/${tile.id}/`, { method: "DELETE" })
      .then((response) =>
        response.ok ? deleteTile(tile.id) : Promise.reject(response)
      )
      .catch((err) => {
        console.error(err);
      });
  };

  const handleUpdateTile = (dataToUpdate) => {
    console.log(JSON.stringify(dataToUpdate));
    fetch(`http://localhost:8000/api/tiles/${tile.id}/`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToUpdate),
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

  const getTaskTypes = () => {
    fetch("http://localhost:8000/api/task-types/")
      .then((response) =>
        response
          .json()
          .then((data) =>
            response.ok ? refreshTaskTypes(data) : Promise.reject(data)
          )
      )
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDeleteTask = (taskId) => {
    fetch(`http://localhost:8000/api/tasks/${taskId}/`, { method: "DELETE" })
      .then((response) =>
        response.ok ? deleteTask(taskId, tile.id) : Promise.reject(response)
      )
      .catch((err) => {
        console.error(err);
      });
  };

  const handleModal = (task, show) => {
    getTaskTypes();
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
                <h5>{task.title}</h5>
                <div className="d-flex justify-content-around align-items-center">
                  <Button
                    onClick={() => handleModal(task, true)}
                    className="btn-outline-dark"
                  >
                    VIEW
                  </Button>
                  <Button
                    onClick={() => handleDeleteTask(task.id)}
                    className="btn-outline-dark btn-danger"
                  >
                    <FaTrash />
                  </Button>
                </div>
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
                handleUpdateTile({ status: e.target.value });
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
      <Card.Footer>
        <div>
          <span>Launch Date: </span>
          <DateTimePicker
            onChange={(e) => {
              handleUpdateTile({ launch_date: e });
            }}
            value={tile.launch_date}
          />
        </div>
      </Card.Footer>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <div>
          <span>Created At: </span>
          <br />

          {formattedTileDate}
        </div>
        <div style={{ cursor: "pointer" }} onClick={handleDeleteTile}>
          <FaTrash />
        </div>
      </Card.Footer>
    </Card>
  );
}

export default Tile;

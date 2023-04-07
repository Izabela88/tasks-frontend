import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { GlobalContext } from "../context/GlobalState";

function Task({ task, tileId }) {
  const [validated, setValidated] = useState(false);
  const [formTitle, setFormTitle] = useState(task ? task.title : "");
  const [formOrder, setFormOrder] = useState(task ? task.order : "");
  const [formTaskType, setFormTaskType] = useState(task ? task.task_type : "");
  const [formDescription, setFormDescription] = useState(
    task ? task.description : ""
  );
  const { taskTypes } = useContext(GlobalContext);

  const createTask = (body) => {
    fetch("http://localhost:8000/api/tasks/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) =>
        response
          .json()
          .then((data) =>
            response.ok ? console.log(data) : Promise.reject(data)
          )
      )
      .catch((err) => {
        console.error(err);
      });
  };

  const updateTask = (body) => {
    fetch(`http://localhost:8000/api/tasks/${task.id}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) =>
        response
          .json()
          .then((data) =>
            response.ok ? console.log(data) : Promise.reject(data)
          )
      )
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    const body = {
      title: formTitle,
      order: formOrder,
      description: formDescription,
      task_type: formTaskType,
      tile_id: tileId,
    };

    if (task) {
      updateTask(body);
    } else {
      createTask(body);
    }

    setValidated(true);
  };

  return (
    <div className="container">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Row} md="4" controlId="validationCustom01">
            <Form.Label className="mt-4">Title</Form.Label>
            <Form.Control
              name="title"
              required
              type="text"
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              This field can't be empty.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Row} md="4" controlId="validationCustom02">
            <Form.Label className="mt-4">Order</Form.Label>
            <Form.Control
              required
              type="text"
              name="order"
              value={formOrder}
              onChange={(e) => setFormOrder(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              This field can't be empty.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Row} md="4" className="mt-4">
            <Form.Label className="mt-4">Task Type</Form.Label>

            <Form.Select
              name="task_type"
              onChange={(e) => setFormTaskType(e.currentTarget.value)}
              value={formTaskType}
              required
            >
              <option value="">Select Task Type</option>
              {taskTypes.map((type) => (
                <option key={type.name} value={type.name}>
                  {type.name}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              This field is required.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Row} md="4" controlId="validationCustom01">
            <Form.Label className="mt-4">Description</Form.Label>
            <Form.Control
              name="description"
              as="textarea"
              required
              type="text"
              value={formDescription}
              onChange={(e) => setFormDescription(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              This field can't be empty.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default Task;

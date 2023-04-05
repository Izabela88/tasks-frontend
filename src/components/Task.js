import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Task({ task }) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="container">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Row} md="4" controlId="validationCustom01">
            <Form.Label>Title</Form.Label>
            <Form.Control required type="text" value={task ? task.title : ""} />
            <Form.Control.Feedback type="invalid">
              This field can't be empty.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Row} md="4" controlId="validationCustom02">
            <Form.Label>Order</Form.Label>
            <Form.Control required type="text" value={task ? task.order : ""} />
            <Form.Control.Feedback type="invalid">
              This field can't be empty.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Row} md="4" controlId="validationCustom01">
            <Form.Label>Task Type</Form.Label>
            <Form.Control
              required
              type="text"
              value={task ? task.task_type : ""}
            />
            <Form.Control.Feedback type="invalid">
              This field can't be empty.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Row} md="4" controlId="validationCustom01">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              required
              type="text"
              value={task ? task.description : ""}
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

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Task from "./Task";

function MyModal(props) {
  console.log(props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Task
          task={props.task}
          tile_id={props.tile_id}
          order={props.order}
          description={props.description}
          task_type={props.task_type}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;

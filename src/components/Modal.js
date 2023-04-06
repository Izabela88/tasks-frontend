import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Task from "./Task";

function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h3 className="mb-4 mt-3 text-center">
          {props.task ? "Edit" : "Create New"} Task
        </h3>
        <Task task={props.task} tile_id={props.tile_id} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;

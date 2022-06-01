import React, {useState} from 'react';
import './CreateTodoButton.css';

const Modal = ({children, handleClose}) => {

  return (
    <div >
      <div className="modal-container">
        {children}
        <button className="ButtonClose" type="button" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

function CreateTodoButton(props) {
  const  [show, handleShow] = useState(false)
  const [value, handleChange] = useState("")
  
  const handleButtonClick = () => {
    handleShow(true)
  }

  const handleClose = () => {
    return handleShow(false)
  }

  const handleInputChange = (event) => {
    handleChange(event.target.value)
  }

  const handleSubmit = () => {
    if (value.length === 0) {
      return handleShow(false)
    }
    props.addTodoItem(value)
    handleChange("")
    return handleShow(false)
  }


  return (
    <React.Fragment>
      {show && <Modal handleClose={handleClose}>
          <h2 className="AddNewTask">Add your new task to do</h2>
          <div>
            <label></label>
            <input className="NewTask"
              type="text"
              value={value}
              onChange={handleInputChange}
            />
          </div>
          <div>
           <button className="ButtonSave" onClick={handleSubmit} type="button">
              Save
            </button>
          </div>
      </Modal>}
      <button className="CreateTodoButton" onClick={handleButtonClick}>
      +
      </button>
    </React.Fragment>
    
  );
}

export { CreateTodoButton };
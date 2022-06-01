import React from 'react';
import { faCheck, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './TodoItem.css';


function TodoItem(props) {
    return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete}>
        <FontAwesomeIcon icon={faCheck} />
        </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <FontAwesomeIcon icon={faDeleteLeft} />
      </span>
    </li>
  );
}

export { TodoItem }

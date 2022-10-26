import React, { Component } from "react";
import { FaPen, FaTrash } from "react-icons/fa";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <FaPen className="mx-2 text-success" onClick={handleEdit} />
          <FaTrash className="mx-1 text-danger" onClick={handleDelete} />
        </div>
      </li>
    );
  }
}

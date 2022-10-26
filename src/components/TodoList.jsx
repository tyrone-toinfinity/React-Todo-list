import React, { Component } from "react";
import TodoItem from "./TodoItem";
import Button from "react-bootstrap/Button";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>

        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}

        <div className="d-grid">
          <Button onClick={clearList} type="button" variant="danger">
            Clear List
          </Button>
        </div>
      </ul>
    );
  }
}

import React, { Component } from "react";
import { FaBook, FaEdit } from "react-icons/fa";
// Bootstrap
import Button from "react-bootstrap/Button";

export default class TodoInputs extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div
                className={
                  editItem
                    ? "input-group-text  bg-success text-white "
                    : "input-group-text  bg-primary text-white "
                }
              >
                {editItem ? (
                  <FaEdit className="book " />
                ) : (
                  <FaBook className="book" />
                )}
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="add event"
              value={item}
              onChange={handleChange}
            />
          </div>
          <div className="d-grid mt-2">
            <Button
              size="md"
              className=" my-2 btn btn-block d-grid"
              type="submit"
              variant={editItem ? "success" : "primary"}
            >
              {editItem ? "edit item" : "add item"}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

import React, { Component, useState, useEffect } from "react";
import TodoInputs from "./components/TodoInputs";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";

// Bootstrap
import "./scss/styles.scss";
import Button from "react-bootstrap/Button";
import { v4 as uuidv4, v4 } from "uuid";

class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };
  preview = (() => {
    if (!localStorage.getItem("task-list-data")) {
    } else {
      const result = localStorage.getItem("task-list-data");
      const resultParse = JSON.parse(result);
      return (this.state.items = resultParse);
    }
  })();

  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };

    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuidv4(),
      editItem: false,
    });

    // Add to local storage
    const storageItems = updatedItems;
    localStorage.setItem("task-list-data", JSON.stringify(storageItems));
  };

  clearList = () => {
    this.setState({ items: [] });
    localStorage.clear();
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => {
      return item.id !== id;
    });
    // !
    localStorage.removeItem(items);

    this.setState({ items: filteredItems });
  };

  handleEdit = (id) => {
    console.log(id);
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id,
    });
  };

  render() {
    return (
      <div>
        <Navbar />

        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">Task List</h3>

              <TodoInputs
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

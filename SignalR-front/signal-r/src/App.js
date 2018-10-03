import React, { Component } from "react";
import "./App.css";

class App extends Component {
  renderValues = () => {
    return this.props.values.map(item => (
      <div key={this.props.values.indexOf(item)}>
        {item.name}: {item.message}
        {this.props.name === item.name ? (
          <button
            className="App-btn"
            onClick={() =>
              this.props.deleteValue(this.props.values.indexOf(item))
            }
          >
            X
          </button>
        ) : null}
      </div>
    ));
  };

  render() {
    return (
      <div className="App">
        <div>
          <form onSubmit={this.props.onSubmit} noValidate>
            <div>
              <input
                type="text"
                placeholder="Enter name here"
                name="name"
                value={this.props.name}
                onChange={this.props.onInputChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Insert new value"
                name="value"
                value={this.props.value}
                onChange={this.props.onInputChange}
                required
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="App-content">
          {" "}
          <div>Chat:</div>
          {this.renderValues()}
        </div>
      </div>
    );
  }
}

export default App;

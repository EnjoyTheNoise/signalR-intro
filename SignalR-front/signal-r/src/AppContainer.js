import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import App from "./App";
import { addValue, deleteValue } from "./values/valuesActions";

class AppContainer extends Component {
  state = {
    value: "",
    name: ""
  };

  onAdd = value => {
    this.props.actions.addValue(value);
  };

  onDelete = id => {
    this.props.actions.deleteValue(id);
  };

  onInputChange = e => {
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    if (this.state.name === "") {
      window.alert("Name cannot be empty");
      return;
    }
    e.preventDefault();
    this.props.actions.addValue(this.state.value, this.state.name);
  };

  render() {
    return (
      <App
        name={this.state.name}
        values={this.props.values}
        deleteValue={this.onDelete}
        addValue={this.onAdd}
        onSubmit={this.onSubmit}
        onInputChange={this.onInputChange}
      />
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.signalR.isFetching,
  values: state.signalR.values
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addValue, deleteValue }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);

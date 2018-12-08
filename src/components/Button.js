import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class MyButton extends Component {
  render() {
    return (
      <Button
        variant="contained"
        color="secondary"
        onClick={this.props.onClick}
      >
        Secondary
      </Button>
    );
  }
}

export default MyButton;

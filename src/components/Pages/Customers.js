import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography } from "../../includes";

class Reports extends Component {
  render() {
    return (
      <Typography variant="display1" gutterBottom component="h2">
        Reports
      </Typography>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reports);

/* @flow */
import React, { Component } from "react";
import colors from "../colors";
import GenericButton from "./GenericButton";
export default class WhiteButton extends Component<*> {
  render() {
    return (
      <GenericButton
        {...this.props}
        textStyle={{ color: colors.blue }}
        containerStyle={{ backgroundColor: "white" }}
      />
    );
  }
}

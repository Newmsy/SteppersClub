import React, { Component } from "react";
import PaypalButton from "./paypalbutton";

export class Paypal extends Component {
  state = {
    showPaypal: true,
  };

  showPaypalButtons = () => {
    this.setState({ showPaypal: true });
  };

  render() {
    return <PaypalButton />;
  }
}

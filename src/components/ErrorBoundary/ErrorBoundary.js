import React from "react";

import "./ErrorBoundary.scss";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div class="container">
          <h1>Sorry, something bad happened ...</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

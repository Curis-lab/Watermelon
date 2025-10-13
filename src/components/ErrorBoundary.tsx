import React, { ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { error, hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: "center", marginTop: "20%" }}>
          <h1 style={{ color: "#ff0000" }}>Oops! Something went wrong.</h1>
          <p>We're working on getting this fixed as soon as we can.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

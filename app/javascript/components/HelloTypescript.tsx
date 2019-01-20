import * as React from "react";
import { } from "prop-types";

interface HelloProps {
  greeting: string;
}

export default class HelloTypescript extends React.Component<HelloProps> {
  constructor(props: HelloProps) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    )
  }
}

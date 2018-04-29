//@flow
import React, { type Node } from "react";

export type State = { value: string };

// Generic State Manager
export default class WithState<State> extends React.Component<
  {
    initialState: State,
    render: (State, ((State) => State) => void) => Node
  },
  State
> {
  constructor(props: { initialState: State }) {
    super();
    this.state = props.initialState;
  }
  render() {
    return this.props.render(this.state, this.setState.bind(this));
  }
}

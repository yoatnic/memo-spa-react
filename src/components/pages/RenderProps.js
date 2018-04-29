//@flow

// ref https://qiita.com/mizchi/items/0787f01b48ddb22390c3

import React from "react";
import WithState from "../atoms/WithState";
import type { State } from "../atoms/WithState";

const initialState: State = { value: "" };

const WrappedComponent = () => {
  return (
    <WithState
      initialState={initialState}
      render={(state: State, update: ((State) => State) => void) => {
        return (
          <div>
            <div>
              <input
                type="text"
                onChange={({ target }) => {
                  update(s => ({ ...s, value: target.value }));
                }}
              />
            </div>
            <span>{state.value}</span>
          </div>
        );
      }}
    />
  );
};

export default WrappedComponent;

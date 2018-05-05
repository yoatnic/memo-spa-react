import React from "react";
import MdEditor from "./MdEditor";

class MdEditorList extends React.Component {
  constructor() {
    super();
    this.state = {
      memos: [{ markdown: "no title" }],
      selectIndex: 0
    };
    this.addMemo = this.addMemo.bind(this);
  }

  onClick(index) {
    this.setState({ selectIndex: index });
  }

  displayTitle(markdown) {
    return markdown.split(/\n/)[0];
  }

  addMemo() {
    this.setState(prevState => {
      return Object.assign({}, prevState, {
        memos: [...prevState.memos, { markdown: "no title" }]
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.memos.map((memo, index) => {
          return (
            <div key={index} onClick={this.onClick.bind(this, index)}>
              <p>{this.displayTitle(memo.markdown)}</p>
            </div>
          );
        })}
        <button onClick={this.addMemo}>add memo</button>
        <MdEditor
          {...{
            ...this.state.memos[this.state.selectIndex],
            updateHandler: markdown => {
              const cp = [...this.state.memos];
              cp[this.state.selectIndex].markdown = markdown;
              this.setState({ memos: cp });
            }
          }}
        />
      </div>
    );
  }
}

export default MdEditorList;

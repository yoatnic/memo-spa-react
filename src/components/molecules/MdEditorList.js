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
    this.deleteMemo = this.deleteMemo.bind(this);
    this.saveMemos = this.saveMemos.bind(this);
  }

  componentDidMount() {
    window.firebase
      .database()
      .ref(`memos/${this.props.userData.uid}`)
      .once("value")
      .then(result => {
        if (result.val()) {
          this.setState({ memos: result.val() });
        }
      });
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

  deleteMemo() {
    this.setState(prevState => {
      const newMemos = prevState.memos.filter((memo, index) => {
        return index !== prevState.selectIndex;
      });
      return Object.assign({}, prevState, {
        memos: [...newMemos],
        selectIndex:
          prevState.selectIndex > 0
            ? prevState.selectIndex - 1
            : prevState.selectIndex
      });
    });
  }

  saveMemos() {
    window.firebase
      .database()
      .ref(`memos/${this.props.userData.uid}`)
      .set(this.state.memos);
  }

  render() {
    const wrapperStyle = {
      width: "19%",
      float: "left",
      borderTop: "1px​solid​#000"
    };
    const listStyle = {
      padding: "10px",
      boxSizing: "border-box",
      textAlign: "left",
      borderBottom: "1px solid #000"
    };
    const titleStyle = {
      height: "1.5em",
      margin: 0,
      whiteSpace: "nowrap",
      overflow: "hidden"
    };
    return (
      <div>
        <div style={wrapperStyle}>
          {this.state.memos.map((memo, index) => {
            const isSelected = this.state.selectIndex === index;
            return (
              <div
                className="memoList"
                key={index}
                onClick={this.onClick.bind(this, index)}
                style={listStyle}
              >
                <p data-selected={isSelected} style={titleStyle}>
                  {this.displayTitle(memo.markdown)}
                </p>
              </div>
            );
          })}
        </div>

        <button onClick={this.addMemo}>add memo</button>
        {this.state.memos.length > 1 ? (
          <button onClick={this.deleteMemo}>delete memo</button>
        ) : null}
        <button onClick={this.saveMemos}>save memos</button>
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

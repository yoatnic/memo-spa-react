import React from "react";
import PropTypes from "prop-types";
import marked from "marked";

class MdEditor extends React.Component {
  constructor(props) {
    super();
    this.state = {
      markdown: props.markdown
    };
    this.preview = this.preview.bind(this);
    this.onChangeMd = this.onChangeMd.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.markdown !== nextProps.markdown) {
      this.setState({ markdown: nextProps.markdown });
    }
  }

  onChangeMd(e) {
    this.setState({
      markdown: e.target.value
    });
    this.props.updateHandler(e.target.value);
  }

  preview() {
    return marked(this.state.markdown);
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        <textarea
          onChange={this.onChangeMd}
          style={{ width: "50%", height: "500px" }}
          value={this.state.markdown}
        />
        <div
          style={{ width: "50%", textAlign: "left" }}
          dangerouslySetInnerHTML={{ __html: this.preview() }}
        />
      </div>
    );
  }
}

MdEditor.propTypes = {
  markdown: PropTypes.string
};

export default MdEditor;

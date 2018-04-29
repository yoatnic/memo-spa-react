import React from "react";
import PropTypes from "prop-types";
import { List } from "office-ui-fabric-react/lib/List";
import { ScrollablePane } from "office-ui-fabric-react/lib/ScrollablePane";

const cell = props => {
  const styleOuter = {
    width: `${100 / 4}%`,
    position: "relative",
    float: "left",
    padding: "2px"
  };
  const styleInner = {
    border: "solid 1px"
  };
  return (
    <div style={styleOuter}>
      <div style={styleInner}>
        <p>title{props.index}</p>
        <p>body</p>
      </div>
    </div>
  );
};

cell.propTypes = {
  index: PropTypes.number
};

const OfficeUIFablic = () => {
  const items = new Array(100);
  for (let i = 0; i < items.length; i++) {
    items[i] = { index: i };
  }
  return (
    <ScrollablePane style={{ height: "500px" }}>
      <List
        items={items}
        getItemCountForPage={() => 10}
        getPageHeight={() => 500}
        renderedWindowsAhead={4}
        onRenderCell={cell}
      />
    </ScrollablePane>
  );
};

export default OfficeUIFablic;

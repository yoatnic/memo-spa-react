//@flow
import React from "react";
import "intersection-observer";
import Observer from "react-intersection-observer";

type Props = {
  itemId: number,
  text: string,
  onGetNextItems: Function,
  anchor: boolean
};

const SomeItem = (props: Props) => {
  const style = {
    width: "100%",
    borderBottom: "1px solid"
  };
  const onEnter = inView => {
    if (inView) props.onGetNextItems(props.itemId);
  };
  const text = props.text;
  return (
    <div style={style}>
      {props.anchor ? <Observer triggerOnce={true} onChange={onEnter} /> : null}
      <div>{text}</div>
    </div>
  );
};

export default SomeItem;

//@flow
import React from "react";
import SomeItem from "../atoms/SomeItem";

type Props = {
  items: Array<{
    itemId: number,
    text: string
  }>,
  onGetNextItems: Function
};

const SomeList = (props: Props) => {
  const style = {
    width: "100%"
  };
  if (props.items.length === 0) props.onGetNextItems(0);
  return (
    <div style={style}>
      {props.items.map((msg, index) => (
        <SomeItem
          key={msg.itemId}
          itemId={msg.itemId}
          onGetNextItems={props.onGetNextItems}
          text={msg.text}
          anchor={index === props.items.length - 1}
        />
      ))}
    </div>
  );
};

export default SomeList;

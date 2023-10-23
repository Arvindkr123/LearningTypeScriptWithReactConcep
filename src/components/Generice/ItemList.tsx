import React from "react";
import Item from "./Item";

const ItemList = () => {
  return (
    <div>
      <Item
        id={1}
        title="hello ram"
        extra={[{ id: 1, username: "Hello Shayam" }]}
      />
    </div>
  );
};

export default ItemList;

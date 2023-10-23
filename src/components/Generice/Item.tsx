import React from "react";

type ItemProps<T> = {
  id: number;
  title: string;
  extra: T[];
};

const Item = (props: ItemProps<object>) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Item;

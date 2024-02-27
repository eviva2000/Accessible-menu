import React from "react";
import { useMenuItem } from "react-aria";
import { Node } from "@react-types/shared";

function MenuItem<T>({ item, state }: { item: Node<T>; state: any }) {
  let ref = React.useRef(null);
  let { menuItemProps } = useMenuItem({ key: item.key }, state, ref);

  return (
    <li
      {...menuItemProps}
      ref={ref}
      style={{
        padding: "3px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        color: "black",
      }}
    >
      {item.rendered}
    </li>
  );
}
export default MenuItem;

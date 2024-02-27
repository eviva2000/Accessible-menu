import React from "react";
import type { AriaMenuProps } from "react-aria";
import { useTreeState } from "react-stately";
import { useMenu } from "react-aria";
import MenuItem from "./MenuItem";
function Menu<T extends object>(props: AriaMenuProps<T>) {
  let state = useTreeState(props);

  let ref = React.useRef(null);
  let { menuProps } = useMenu(props, state, ref);

  return (
    <ul
      {...menuProps}
      ref={ref}
      style={{
        margin: "30px 0 0",
        padding: 0,
        border: "solid 1px hsl(202, 12%, 87%) ",
        outline: "none",
        borderRadius: "6px",
        width: "100px",
      }}
    >
      {[...state.collection].map((item) => (
        <MenuItem key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
}
export default Menu;

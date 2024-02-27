import React from "react";
import type { AriaMenuProps } from "react-aria";
import { useTreeState } from "react-stately";
import { useMenu } from "react-aria";
import MenuItem from "./MenuItem";
function Menu<T extends object>(props: AriaMenuProps<T>) {
  // Create menu state based on the incoming props
  let state = useTreeState(props);

  // Get props for the menu element
  let ref = React.useRef(null);
  let { menuProps } = useMenu(props, state, ref);

  return (
    <ul {...menuProps} ref={ref} style={{ margin: "30px 0 0", padding: 0 }}>
      {[...state.collection].map((item) => (
        <MenuItem key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
}
export default Menu;

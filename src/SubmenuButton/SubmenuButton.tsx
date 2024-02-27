import React from "react";
import type { MenuTriggerProps } from "react-stately";
import { useMenuTrigger } from "react-aria";
import { useMenuTriggerState } from "react-stately";
import Popover from "./Popover";
import Button from "./Button";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import { AriaMenuProps } from "@react-types/menu";

interface MenuButtonProps<T> extends AriaMenuProps<T>, MenuTriggerProps {
  label?: string;
}

function MenuButton<T extends object>(props: MenuButtonProps<T>) {
  // Create state based on the incoming props
  let state = useMenuTriggerState(props);

  // Get props for the button and menu elements
  let ref = React.useRef(null);
  let { menuTriggerProps, menuProps } = useMenuTrigger<T>({}, state, ref);

  return (
    <>
      <Button
        {...menuTriggerProps}
        buttonRef={ref}
        style={{ height: 30, fontSize: 14, width: "100%", textAlign: "left" }}
      >
        {props.label}
        <span aria-hidden="true" style={{ paddingLeft: 5 }}>
          ➡️
        </span>
      </Button>

      {state.isOpen && (
        <Popover state={state} triggerRef={ref} placement="right">
          <Menu {...props} {...menuProps} />
        </Popover>
      )}
    </>
  );
}
export default MenuButton;

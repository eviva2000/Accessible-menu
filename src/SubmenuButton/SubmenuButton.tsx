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
  let state = useMenuTriggerState(props);

  let ref = React.useRef(null);
  let { menuTriggerProps, menuProps } = useMenuTrigger<T>({}, state, ref);

  return (
    <>
      <Button
        {...menuTriggerProps}
        buttonRef={ref}
        style={{
          height: 30,
          fontSize: 16,
          width: "100%",
          textAlign: "left",
          paddingLeft: "12px",
          backgroundColor: "#ffffff",
          border: 0,
          fontFamily: "Nunito",
          color: "hsl(202, 100%, 11%)",
        }}
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

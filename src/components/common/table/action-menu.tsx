import { useRef, type FC } from "react";
import useOutsideClick from "../../../hooks/use-outside-click";
import type { ActionMenuProps } from "./type";

const ActionMenu: FC<ActionMenuProps> = ({
  actions,
  rowData,
  onActionClick,
}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(menuRef, onActionClick);
  return (
    <div
      ref={menuRef}
      className="absolute -left-[76px] mt-2 w-36 bg-white rounded-xl shadow-[0px_4px_16px_#00000030] z-10"
    >
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {actions.map((action) => (
          <button
            key={action.key}
            onClick={() => {
              action.handler(rowData);
              onActionClick();
            }}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActionMenu;

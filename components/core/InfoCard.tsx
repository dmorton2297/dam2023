import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { SubHeader } from "./SubHeader";

export const InfoCard: React.FC<{
  children?: React.ReactNode | React.ReactNode[];
  title: string;
  largeTitle?: boolean;
  open?: boolean;
  noToggle?: boolean;
  style?: React.CSSProperties;
  hidden?: boolean;
  setFocused?: (section: string) => void;
}> = ({ children, title, noToggle, open: openProp, style, largeTitle, setFocused, hidden }) => {
  const [open, setOpen] = useState(!!noToggle || openProp);

  useEffect(() => {
    if (openProp) {
      setOpen(openProp);
    }
  }, [openProp])

  if (hidden) return null;
  return (
    <div
      onClick={
        !noToggle
          ? () => {
              setOpen((value) => !value);
              if (setFocused) {
                setFocused(title);
              }
            }
          : undefined
      }
      style={{
        ...style,
        height: open ? "unset" : 72,
        overflow: "hidden",
        borderRadius: 10,
      }}
      className="p-4 border-x-neutral-300 border-2 m-3"
    >
      <div className="flex justify-between">
        {largeTitle && <Header>{title}</Header>}
        {!largeTitle && <SubHeader>{title}</SubHeader>}
        {!noToggle && (
          <span
            style={{ marginTop: 5, cursor: "pointer" }}
            className="material-symbols-outlined text-gray-500"
          >
            {open ? "expand_less" : "expand_more"}
          </span>
        )}
      </div>
      {open && children}
    </div>
  );
};

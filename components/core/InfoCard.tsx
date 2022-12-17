import React, { useState } from "react";
import { Header } from "./Header";
import { SubHeader } from "./SubHeader";

export const InfoCard: React.FC<{
  children: React.ReactNode | React.ReactNode[];
  title: string;
  largeTitle?: boolean;
  open?: boolean;
  noToggle?: boolean;
  style?: React.CSSProperties;
}> = ({ children, title, noToggle, open: openProp, style, largeTitle }) => {
  const [open, setOpen] = useState(!!noToggle || openProp);
  console.log(open);
  return (
    <div
      onClick={() => (!noToggle ? setOpen((value) => !value) : null)}
      style={{ ...style, height: open ? "unset" : 72, overflow: "hidden" }}
      className="p-4 border-x-neutral-300 border-2 m-2"
    >
      <div className="flex justify-between">
        {largeTitle && <Header>{title}</Header>}
        {!largeTitle && <SubHeader>{title}</SubHeader>}
        <span style={{ marginTop: 5 }} className="material-symbols-outlined text-gray-500">{open ? 'expand_less' : 'expand_more'}</span>
      </div>
      {open && children}
    </div>
  );
};

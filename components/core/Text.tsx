import React from "react";

export const Text: React.FC<{
  children: React.ReactNode | React.ReactNode[];
  style?: React.CSSProperties;
  onClick?: (e: any) => void;
}> = ({ children, style, onClick }) => (
  <p
    className="font-thin text-xl"
    style={style}
    onClick={onClick ? (e) => onClick(e) : undefined}
  >
    {children}
  </p>
);

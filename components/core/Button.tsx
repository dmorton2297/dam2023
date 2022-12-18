import React from "react";

export const Button: React.FC<{
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode | React.ReactNode[];
  onClick?: (e: any) => void;
  style?: React.CSSProperties;
}> = ({ type, children, onClick, style }) => (
  <button
    type={type}
    style={{
      border: "1px solid black",
      padding: "5px 10px",
      cursor: "pointer",
      ...style,
    }}
    onClick={(e) => {
      e.stopPropagation();
      if (onClick) onClick(e);
    }}
  >
    {children}
  </button>
);

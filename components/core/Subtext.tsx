import React from "react";

export const Subtext: React.FC<{
  children: React.ReactNode | React.ReactNode[];
  style?: React.CSSProperties;
  onClick?: (e: any) => void;
}> = ({ children, style, onClick }) => (
  <p
    className="text-xl bg-stone-600"
    style={{
      ...style,
      fontWeight: 200,
      color: 'white',
      padding: '0px 12px',
      margin: '5px 0px',
      borderRadius: 1000,
    }}
    onClick={onClick ? (e) => onClick(e) : undefined}
  >
    {children}
  </p>
);

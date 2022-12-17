import React from "react";

export const Subtext: React.FC<{
  children: React.ReactNode | React.ReactNode[];
  style?: React.CSSProperties;
  onClick?: (e: any) => void;
}> = ({ children, style, onClick }) => (
  <p
    className="text-xl font-bold bg-stone-400"
    style={{
      ...style,
      fontWeight: 400,
      color: 'white',
      padding: '5px 12px',
      margin: '15px 0px',
      borderRadius: 10,
    }}
    onClick={onClick ? (e) => onClick(e) : undefined}
  >
    {children}
  </p>
);

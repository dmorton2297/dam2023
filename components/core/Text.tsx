import React from "react";

export const Text: React.FC<{
  children: React.ReactNode | React.ReactNode[];
  style?: React.CSSProperties;
  onClick?: (e: any) => void;
}> = ({ children, style, onClick }) => (
  <p
    className="text-xl"
    style={{
      ...style,
      fontWeight: 200,
    }}
    onClick={
      onClick
        ? (e) => {
            e.stopPropagation();
            onClick(e);
          }
        : undefined
    }
  >
    {children}
  </p>
);

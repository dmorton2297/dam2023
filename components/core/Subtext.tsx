import React from "react";

export const Subtext: React.FC<{
  children: React.ReactNode | React.ReactNode[];
  style?: React.CSSProperties;
  onClick?: (e: any) => void;
}> = ({ children, style, onClick }) => (
  <div
    className="flex"
    style={{
      background: "rgba(135, 157, 186)",
      padding: "5px 12px",
      margin: "15px 0px",
      borderRadius: 10,
    }}
    onClick={(e) => e.stopPropagation()}
  >
    <span
      style={{ marginTop: 2, marginRight: 10, cursor: "pointer", color: "white" }}
      className="material-symbols-outlined text-gray-500"
    >
      campaign
    </span>
    <p
      className="text-xl font-bold"
      style={{
        ...style,
        fontWeight: 400,

        color: "white",
      }}
      onClick={onClick ? (e) => {
        e.stopPropagation();
        onClick(e);
      } : undefined}
    >
      {children}
    </p>
  </div>
);

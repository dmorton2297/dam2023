import React from "react";

export const Header: React.FC<{ children: string }> = ({ children }) => (
  <h1 className="font-serif text-4xl">{children}</h1>
);

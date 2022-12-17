import React from "react";

export const SubHeader: React.FC<{ children: string }> = ({ children }) => (
  <h1 className="font-serif text-3xl">{children}</h1>
);

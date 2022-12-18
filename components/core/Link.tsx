import React from "react";

export const Link: React.FC<{
  href: string;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}> = ({ href, children, className }) => {
  return (
    <a
      href={href}
      className={`pb-3 underline text-blue-500 ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </a>
  );
};

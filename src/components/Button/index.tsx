import React, { ReactNode } from "react";

const Button = ({
  className,
  href,
  target,
  children,
}: {
  className?: string;
  href: string;
  target?: string;
  children?: ReactNode;
}) => (
  <a href={href} target={target} className={`rhulcompsoc-button ${className}`}>
    {children}
  </a>
);

export { Button };

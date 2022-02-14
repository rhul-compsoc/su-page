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
  <a
    href={href}
    target={target}
    className={`inline-block border-4 py-5 px-16 transition-colors font-heading font-bold ${className}`}
  >
    {children}
  </a>
);

export { Button };

import React, { ReactNode } from "react";

const Section = ({
  title,
  tag,
  className,
  children,
}: {
  title?: string;
  tag?: string;
  className?: string;
  children?: ReactNode;
}) => (
  <div className="py-6">
    {title && <h3 className="font-heading uppercase text-compsoc-red font-bold text-xl">{title}</h3>}
    {tag && <h4 className="font-heading font-bold text-4xl">{tag}</h4>}
    {children}
  </div>
);

export { Section };

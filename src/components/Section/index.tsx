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
  <div className={className}>
    {title && (
      <h3 className="rhulcompsoc-h3">
        {title}
      </h3>
    )}
    {tag && (
      <h4 className="rhulcompsoc-h4">
        {tag}
      </h4>
    )}
    {children}
  </div>
);

export { Section };



import React, { ReactNode } from "react";

const Buttons = ({ children }: { children?: ReactNode }) => (
  <div className="flex justify-center flex-wrap gap-3">{children}</div>
);

export { Buttons };

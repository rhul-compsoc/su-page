import React, { ReactNode } from "react"

const Buttons = ({
  children,
}: {
  children?: ReactNode;
}) => (
  <div className="rhulcompsoc-buttons">{children}</div>
)

export {
  Buttons
}

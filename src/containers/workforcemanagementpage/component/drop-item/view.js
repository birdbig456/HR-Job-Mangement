import React, { forwardRef } from "react";
import "./styles.css";

export default forwardRef(({ children, heading }, ref) => {
  return (
    <div class="container" ref={ref}>
      <div>{children}</div>
    </div>
  );
});
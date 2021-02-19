import React, { forwardRef } from "react";
import "./styles.css";

export default forwardRef(({ children, heading }, ref) => {
  return (
    <div class="container" ref={ref} style={{display:"flex",justifyContent:"center",alignItems:"start"}}>
      <div>{children}</div>
    </div>
  );
});
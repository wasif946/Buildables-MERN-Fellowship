import React from "react";
import useRenderCount from "../hooks/useRenderCount";

/**
 * RenderProfiler
 * Wrap a component with this to track its render counts in dev.
 */
export default function RenderProfiler({ name, children }) {
  const count = useRenderCount(name);

  return (
    <div style={{ border: "1px dashed gray", padding: "0.5rem", margin: "0.5rem 0" }}>
      <p style={{ fontSize: "0.8rem", color: "gray" }}>
        {name} render count: {count}
      </p>
      {children}
    </div>
  );
}

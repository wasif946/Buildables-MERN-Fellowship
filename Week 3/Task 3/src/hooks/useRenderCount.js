import { useRef } from "react";

export default function useRenderCount(name = "Component") {
  const renders = useRef(0);
  renders.current++;
  console.log(`${name} render count:`, renders.current);
  return renders.current;
}

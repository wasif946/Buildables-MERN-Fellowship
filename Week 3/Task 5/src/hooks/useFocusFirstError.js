// src/hooks/useFocusFirstError.js
import { useEffect } from "react";

export default function useFocusFirstError(errors, setFocus) {
  useEffect(() => {
    if (!errors || Object.keys(errors).length === 0) return;
    // find first key in errors
    const first = Object.keys(errors)[0];
    // use RHF setFocus if available
    if (typeof setFocus === "function") {
      setFocus(first);
    } else {
      const el = document.querySelector(`[name="${first}"]`);
      if (el && typeof el.focus === "function") el.focus();
    }
  }, [errors, setFocus]);
}

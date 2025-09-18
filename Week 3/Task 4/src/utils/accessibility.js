// src/utils/accessibility.js
import { useEffect } from "react";

/**
 * Automatically focuses the first invalid field when formState.errors changes.
 * @param {object} errors - react-hook-form formState.errors object
 * @param {function} setFocus - react-hook-form setFocus function
 */
export default function useFocusFirstError(errors, setFocus) {
  useEffect(() => {
    if (!errors || !setFocus) return;

    const firstErrorField = Object.keys(errors)[0];
    if (firstErrorField) {
      setFocus(firstErrorField);
    }
  }, [errors, setFocus]);
}

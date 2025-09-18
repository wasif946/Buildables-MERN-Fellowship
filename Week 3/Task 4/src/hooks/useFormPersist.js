// src/hooks/useFormPersist.js
import { useEffect } from "react";

export default function useFormPersist({ watch, key }) {
  useEffect(() => {
    if (typeof watch !== "function") return;

    // watch returns either:
    //  - an unsubscribe function: const unsub = watch(cb)
    //  - or an object with an unsubscribe method: const sub = watch(cb); sub.unsubscribe()
    let cleanup = null;

    try {
      const maybeUnsub = watch((values) => {
        try {
          localStorage.setItem(key, JSON.stringify(values));
        } catch (e) {
          // swallow storage errors but warn
          // console.warn kept out of tests; still safe to log in dev
          // eslint-disable-next-line no-console
          console.warn("Failed to persist form data", e);
        }
      });

      // if watch(...) returned a function — that's the unsubscribe
      if (typeof maybeUnsub === "function") {
        cleanup = maybeUnsub;
      } else if (maybeUnsub && typeof maybeUnsub.unsubscribe === "function") {
        // if it returned an object with unsubscribe()
        cleanup = () => maybeUnsub.unsubscribe();
      }
    } catch (e) {
      // swallow subscription errors — nothing to do
      // eslint-disable-next-line no-console
      console.warn("Failed to subscribe to form watch", e);
    }

    return () => {
      if (typeof cleanup === "function") {
        try {
          cleanup();
        } catch (e) {
          // cleanup best-effort
        }
      }
    };
  }, [watch, key]);
}

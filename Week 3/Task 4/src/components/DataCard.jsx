import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import useRenderCount from "../hooks/useRenderCount";

export default function DataCard({ item }) {
  useRenderCount("DataCard");

  // get current theme from context
  const { theme } = useTheme();

  // fallback colors for light and dark themes
  const tokens = {
    light: {
      card: "#ffffff",
      text: "#000000",
    },
    dark: {
      card: "#1e1e1e",
      text: "#ffffff",
    },
  };

  const currentTokens = tokens[theme] || tokens.light;

  return (
    <div
      style={{
        background: currentTokens.card,
        color: currentTokens.text,
        padding: "1rem",
        borderRadius: "0.5rem",
        margin: "0.5rem 0",
      }}
    >
      {/* Show user info instead of post info */}
      <h3>{item.name}</h3>
      <p>
        <strong>Username:</strong> {item.username}
      </p>
      <p>
        <strong>Email:</strong> {item.email}
      </p>
    </div>
  );
}

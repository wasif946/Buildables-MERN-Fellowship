import React from "react";
import { colors, spacing, radii, typography } from "../styles/token.ts";

type CardProps = {
  title: string;
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        padding: spacing.md,
        borderRadius: radii.lg,
        fontFamily: typography.fontFamily,
      }}
    >
      <h2
        style={{
          fontSize: typography.fontSize.lg,
          fontWeight: typography.fontWeight.bold,
          marginBottom: spacing.sm,
        }}
      >
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
};

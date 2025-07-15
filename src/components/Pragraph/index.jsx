import React from "react";
import clsx from "clsx";

const sizeMap = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const weightMap = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const colorMap = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  neutral: "text-neutral",
  gray: "text-gray-600",
  black: "text-black",
  white: "text-white",
};

const alignMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

const Paragraph = ({
  children,
  size = "base",
  weight = "normal",
  color = "gray",
  align = "left",
  className = "",
}) => {
  const classes = clsx(
    sizeMap[size],
    weightMap[weight],
    colorMap[color],
    alignMap[align],
    "leading-relaxed",
    className
  );

  return <p className={classes}>{children}</p>;
};

export default Paragraph;

import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  href?: string;
}

export default function Button({ 
  variant = "primary", 
  href, 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const combinedClassName = `${styles.btn} ${styles[variant]} ${className || ""}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}

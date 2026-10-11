import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "outline" | "quiet" }) {
  return <button className={`action action-${variant} ${className}`} {...props} />;
}
export function ActionLink({
  variant = "primary",
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: "primary" | "outline" | "quiet" }) {
  return <a className={`action action-${variant} ${className}`} {...props} />;
}

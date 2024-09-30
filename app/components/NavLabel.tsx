import { FC, ReactNode } from "react";

export const NavLabel: FC<{
  children: ReactNode;
}> = ({ children }) => (
  <span style={{ fontSize: "12px", fontWeight: "900" }}>{children}</span>
);

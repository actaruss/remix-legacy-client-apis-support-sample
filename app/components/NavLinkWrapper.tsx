import { NavLink } from "@remix-run/react";
import { FC, ReactNode } from "react";

export const NavLinkWrapper: FC<{
  to: string;
  children: ReactNode;
}> = ({ to, children }) => {
  return (
    <NavLink
      className={({ isActive, isPending }) =>
        isActive ? "active" : isPending ? "pending" : ""
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

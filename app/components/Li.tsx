import { NavLinkWrapper } from "./NavLinkWrapper";

export function Li({ to, label }: { to: string; label: string }) {
  return (
    <li>
      <NavLinkWrapper to={to}>{label}</NavLinkWrapper>
    </li>
  );
}

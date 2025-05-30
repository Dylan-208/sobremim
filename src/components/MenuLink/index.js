import { NavLink } from "react-router";
import styles from "./MenuLink.module.css";

export default function MenuLink({ children, to }) {
  return (
    <>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? styles.linkDestacado : isPending ? styles.link : ""
        }
        to={to}
      >
        {children}
      </NavLink>
    </>
  );
}

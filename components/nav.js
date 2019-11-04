import React from "react";
import Link from "next/link";
import styled from "styled-components";

const links = [
  { href: "/", label: "Home" },
  { href: "/mission", label: "Our Mission" },
  { href: "/support", label: "Support us" },
  { href: "/support#sponsors", label: "Sponsors" },
  { href: "/blog", label: "Blog" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const NavContainer = styled.nav`
  text-align: center;
  position: "absolute";
  background-color: rgba(0, 0, 0, 0.9);
  height: 0;
  overflow: visible;
  color: #fff;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 3em;
  z-index: 1000;
  padding: 0em 15%;
  display: flex;
  align-items: center;
  font-size: 1.5em;

  .logo {
    margin-right: auto;
  }

  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    display: flex;
    padding: 6px 8px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = () => (
  <NavContainer>
    <div className="logo">
      <Link href="/">
        <a>Blair3sat</a>
      </Link>
    </div>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{``}</style>
  </NavContainer>
);

export default Nav;

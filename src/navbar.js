import React from "react"
import { Link } from "react-scroll"
import { css } from "emotion"
import { Instagram, Mail } from "./icons"

const NavBar = () => (
  <div style={{ textAlign: "center" }}>
    <div
      style={{
        display: "flex",
        justifyItems: "center",
        margin: "auto",
        position: "relative",
      }}
    >
      <img
        style={{
          width: 200,
          height: 200,
          display: "inline-block",
          margin: "auto",
        }}
        src="https://res.cloudinary.com/jgilgen/image/upload/q_auto:eco/v1525204572/sweet_little_signs_logo_e0oaw1.png"
      />
      <div style={{ position: "absolute", top: 2, right: 2, display: "flex" }}>
        <a
          href="https://www.instagram.com/sweetlittlesigns"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Instagram />
        </a>
        <a href="mailto:sweetlittlesigns@gmail.com">
          <Mail />
        </a>
      </div>
    </div>
    <div className={navbar}>
      <Link className={navbarItem} to="home" smooth="easeOutQuint" offset={-50}>
        Home
      </Link>
      <Link
        className={navbarItem}
        to="gallery"
        smooth="easeOutQuint"
        offset={-50}
      >
        Gallery
      </Link>
      <Link
        className={navbarItem}
        to="contact"
        smooth="easeOutQuint"
        offset={-50}
      >
        Contact
      </Link>
    </div>
  </div>
)

const navbar = css`
  display: flex;
  justify-content: center;
  background-color: rgba(250, 250, 250, 1);
  color: #333;
  height: 1.5rem;
  padding: 7px 20px;
  font-family: Ubuntu;
  position: relative;
  top: 0;
  z-index: 10;
  border-top: double #555;
  border-bottom: double #555;
`
const navbarItem = css`
  font-size: 1.2rem;
  cursor: pointer;
  margin: 0 10px;
  text-transform: uppercase;
`

export default NavBar

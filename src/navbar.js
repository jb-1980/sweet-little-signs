import React from "react"
import { StyleSheet, css } from "aphrodite"
import { Link } from "react-scroll"

const NavBar = () => (
  <div className={css(styles.navbar)}>
    <img
      style={{ width: 200, height: 200 }}
      src="http://res.cloudinary.com/jgilgen/image/upload/q_auto:eco/v1525204572/sweet_little_signs_logo_e0oaw1.png"
    />
    <Link
      className={css(styles.navbarItem)}
      to="about-me"
      smooth="easeOutQuint"
      offset={-50}
    >
      Home
    </Link>
    <Link
      className={css(styles.navbarItem)}
      to="projects"
      smooth="easeOutQuint"
      offset={-50}
    >
      Gallery
    </Link>
    <Link
      className={css(styles.navbarItem)}
      to="contact"
      smooth="easeOutQuint"
      offset={-50}
    >
      Contact
    </Link>
  </div>
)

const styles = StyleSheet.create({
  navbar: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "rgba(200, 63, 1, 1)",
    color: "#fff",
    height: "1.5rem",
    padding: "7px 20px",
    fontFamily: "Ubuntu",
    position: "fixed",
    top: "0",
    zIndex: 10,
  },
  navbarItem: {
    fontSize: "1.2rem",
    cursor: "pointer",
    margin: "0 10px",
    textTransform: "uppercase",
  },
})

export default NavBar

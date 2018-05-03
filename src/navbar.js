import React from "react"
import { StyleSheet, css } from "aphrodite"
import { Link } from "react-scroll"

const NavBar = () => (
  <div style={{ textAlign: "center" }}>
    <img
      style={{ width: 200, height: 200, display: "inline-block" }}
      src="https://res.cloudinary.com/jgilgen/image/upload/q_auto:eco/v1525204572/sweet_little_signs_logo_e0oaw1.png"
    />
    <div className={css(styles.navbar)}>
      <Link
        className={css(styles.navbarItem)}
        to="home"
        smooth="easeOutQuint"
        offset={-50}
      >
        Home
      </Link>
      <Link
        className={css(styles.navbarItem)}
        to="gallery"
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
  </div>
)

const styles = StyleSheet.create({
  navbar: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgba(250, 250, 250, 1)",
    color: "#333",
    height: "1.5rem",
    padding: "7px 20px",
    fontFamily: "Ubuntu",
    position: "relative",
    top: "0",
    zIndex: 10,
    border: "2px solid #ddd",
  },
  navbarItem: {
    fontSize: "1.2rem",
    cursor: "pointer",
    margin: "0 10px",
    textTransform: "uppercase",
  },
})

export default NavBar

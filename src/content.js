import React from "react"
import { StyleSheet, css } from "aphrodite"
import Gallery from "./gallery"

const styles = StyleSheet.create({
  container: {
    width: "80%",
    margin: "auto",
  },
})

export default () => (
  <div className={css(styles.container)}>
    <section id="home">
      <h1 style={{ textAlign: "center" }}>Homemade Wood Signs</h1>
      <hr />
      <p>
        All our signs are made to order with quality lumber, paints, and stains,
        and big lump of love.
      </p>
    </section>
    <Gallery />
    <section id="contact">
      <h2 style={{ textAlign: "center" }}>Contact Us</h2>
      <hr />
    </section>
  </div>
)

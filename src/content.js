import React from "react"
import { StyleSheet, css } from "aphrodite"

const styles = StyleSheet.create({
  container: {
    width: "80%",
    margin: "auto",
  },
})

export default () => (
  <div className={css(styles.container)}>
    <h2>Gallery</h2>
    <h2>Contact Us</h2>
  </div>
)

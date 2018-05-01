import React from "react"
import { render } from "react-dom"
import Navbar from "./navbar"
import Content from "./content"
import Footer from "./footer"
import "./main.css"

const styles = {
  width: "100%",
  height: window.innerHeight,
  background: "#fff",
  margin: "auto",
}

const App = () => (
  <div style={styles}>
    <Navbar />
    <Content />
    <Footer />
  </div>
)

render(<App />, document.getElementById("root"))

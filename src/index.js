import React from "react"
import { render } from "react-dom"
import Navbar from "./navbar"
import Content from "./content"
import { Footer } from "./footer"
import "./main.css"
import "font-awesome/css/font-awesome.min.css"

const styles = {
  width: "100%",
  maxWidth: 1200,
  height: window.innerHeight,
  background: "#fff",
  margin: "0 auto 40px auto",
}

const App = () => (
  <div>
    <section style={styles}>
      <Navbar />
      <Content />
    </section>
    <Footer />
  </div>
)

render(<App />, document.getElementById("root"))

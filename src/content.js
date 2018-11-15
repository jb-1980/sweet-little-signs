import React from "react"
import { css } from "emotion"
import Gallery from "./gallery"

export default () => (
  <div>
    <section id="home">
      <h1 style={{ textAlign: "center", fontFamily: "Courgette" }}>
        Homemade Wood Signs
      </h1>
      <hr />
      <p style={{ fontFamily: "Coming Soon" }}>
        At Sweet Little Signs we are dedicated to making a customized just for
        you. Feel free to browse our gallery for ideas, and contact us to tell
        us exactly what kind of sign you want so we can make it for you. All our
        signs are made to order with quality lumber, paints, and stains, and a
        big lump of love.
      </p>
    </section>
    <Gallery />
  </div>
)

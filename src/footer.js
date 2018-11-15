import React from "react"
import { Phone, Mail, Instagram } from "./icons"
import { css } from "emotion"

export const Footer = () => (
  <section className={footer} id="contact">
    <div className={contactContainer}>
      <div>
        <h2>Connect with us on social media</h2>
        <div>
          <a
            href="https://www.instagram.com/sweetlittlesigns"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Instagram style={{ color: "#fff", borderColor: "#fff" }} />
          </a>
        </div>
      </div>
      <div className={contact}>
        <h2>Contact Us</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Phone
            style={{ color: "#fff", border: "none", width: 20, height: 20 }}
          />{" "}
          623.396.6397
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Mail
            style={{ color: "#fff", border: "none", width: 20, height: 20 }}
          />{" "}
          sweetlittlesigns@gmail.com
        </div>
      </div>
    </div>
    <hr style={{ width: "100%", maxWidth: 1200 }} />
    <div style={{ padding: 20, textAlign: "center" }}>
      © 2018 Sweet Little Signs. Designed by Gilgen Labs
    </div>
  </section>
)

const footer = css`
  width: 100%;
  background: #8d2036;
  color: #fff;
`
const contactContainer = css`
  max-width: 1200px;
  margin: auto;
  display: flex;
`
const contact = css`
  margin-left: auto;
`

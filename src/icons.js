import React from "react"
import { css } from "emotion"

const IconContainer = ({ children, style }) => (
  <div
    className={css`
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      margin: 2px 5px;
      border: 2px solid #3a3939;
      border-radius: 50%;
      color: #3a3939;
    `}
    style={style}
  >
    {children}
  </div>
)

export const Instagram = props => (
  <IconContainer {...props}>
    <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
      />
    </svg>
  </IconContainer>
)

export const Mail = props => (
  <IconContainer {...props}>
    <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4M12,11L20,6H4L12,11M4,18H20V8.37L12,13.36L4,8.37V18Z"
      />
    </svg>
  </IconContainer>
)

export const Phone = props => (
  <IconContainer {...props}>
    <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M16,18H7V4H16M11.5,22A1.5,1.5 0 0,1 10,20.5A1.5,1.5 0 0,1 11.5,19A1.5,1.5 0 0,1 13,20.5A1.5,1.5 0 0,1 11.5,22M15.5,1H7.5A2.5,2.5 0 0,0 5,3.5V20.5A2.5,2.5 0 0,0 7.5,23H15.5A2.5,2.5 0 0,0 18,20.5V3.5A2.5,2.5 0 0,0 15.5,1Z"
      />
    </svg>
  </IconContainer>
)

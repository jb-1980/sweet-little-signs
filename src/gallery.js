import React from "react"
import { Image, Transformation, CloudinaryContext } from "cloudinary-react"

export default () => (
  <section id="gallery">
    <h1 style={{ textAlign: "center", fontFamily: "Courgette" }}>Gallery</h1>
    <hr />
    <CloudinaryContext cloudName="jgilgen" secure={true}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div>
          <Image publicId="IMG_2544_yxymqe.png">
            <Transformation
              quality="auto:eco"
              height="200"
              width="200"
              crop="fill"
            />
          </Image>
          <div style={{ textAlign: "center" }}>KITCHEN MENU</div>
        </div>
        <div>
          <Image publicId="IMG_2445_jkqmd7.jpg">
            <Transformation
              height="200"
              quality="auto:eco"
              width="200"
              crop="fill"
            />
          </Image>
          <div style={{ textAlign: "center" }}>BAKERY</div>
        </div>
        <div>
          <Image publicId="IMG_3874_nij8x8.jpg">
            <Transformation
              height="200"
              quality="auto:eco"
              width="200"
              crop="fill"
            />
          </Image>
          <div style={{ textAlign: "center" }}>PARTY OF 5</div>
        </div>
        <div>
          <Image publicId="IMG_2514_ndo2ws.jpg">
            <Transformation
              height="200"
              quality="auto:eco"
              width="200"
              crop="fill"
            />
          </Image>
          <div style={{ textAlign: "center" }}>HOME</div>
        </div>
        <div>
          <Image publicId="IMG_2603_gj1uu8.jpg">
            <Transformation
              quality="auto:eco"
              height="200"
              width="200"
              crop="fill"
            />
          </Image>
          <div style={{ textAlign: "center" }}>VARIOUS</div>
        </div>
      </div>
    </CloudinaryContext>
  </section>
)

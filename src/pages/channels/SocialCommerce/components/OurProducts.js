import ContainerMain from "src/pages/common/ContainerMain"
import image1 from "images/Channels/SocialCommerce/image-1.png"
import image2 from "images/Channels/SocialCommerce/image-2.png"
import image3 from "images/Channels/SocialCommerce/image-3.png"

import "./OurProducts.scss"

export default function OurProducts() {
  return (
    <>
      <div className="pypierzisq">
        <ContainerMain>
          <div className="frtbwpabjl">
            <div className="xyskrvbhez">
              <div className="mpmkloecdu">
                <div className="rJbDXuhMZw">Social Content & Digital Advertising Management</div>
                <div className="dmOJXeLHPg">
                  <div className="kOKKLQkCvz">
                    <img alt="" className="hyCIrFTAOq hover01" src={image1} />
                  </div>
                  <div className="qOriJZDUwq">
                    We create insightful, engaging and effective social media content marketing strategies that align with your companies short-and long-term goal, increase brand awareness and boost brand engagement to generate new leads and directly elevate your top line growth.
                  </div>
                </div>
              </div>
              <div className="LOKkhgrzEe">
                <div className="dmOJXeLHPg">
                  <div className="kOKKLQkCvz">
                    <img alt="" className="hyCIrFTAOq hover01" src={image2} />
                  </div>
                  <div className="qOriJZDUwq">We precisely define the target group for your campaign and address various consumer behavior by combining different campaign types and advertising formats to maximize your customer reach and enhance your campaign effectivity. </div>
                </div>
                <div className="dmOJXeLHPg">
                  <div className="kOKKLQkCvz">
                    <img alt="" className="hyCIrFTAOq hover01" src={image3} />
                  </div>
                  <div className="qOriJZDUwq">
                  We assess your customer base and perform cost effective and competitive placement of ads on relevant platforms to accelerate your conversion rate.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerMain>
      </div>
    </>
  )
}

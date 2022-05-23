import ContainerMain from "src/pages/common/ContainerMain"
import image1 from "images/Home/WhatWeDo/image-1.png"
import "./WhatWeDo.scss"

const contents = [
  {
    id: 1,
    title: "360-DEGREE SERVICE",
    content:
      "The most important part of our business is to optimize your e-commerce value chain, through combining integrated one-stop solutions and designated services tailored to your business challenges. Our comprehensive, lean and customizable 360-degree services allow clients to develop effective strategies and translate these into real bottom line value for businesses.",
  },
  {
    id: 2,
    title: "COMPREHENSIVE SHOPPER JOURNEY",
    content:
      "We offer our clients holistic approaches and relevant technologies to explore and gain in-depth insights into their customer’s shopping journey. We help brands generate new leads, enhance conversion rate, increase recurring sales from existing ones and elevate your audiences’ experience to build sustainable customer engagements. We proliferate your top line growth through building trustful and deepened long-term relationships with your target audience.",
  },
  {
    id: 3,
    title: "OMNI-CHANNEL STRATEGY & EXECUTION",
    content:
      "E-commerce omnichannel strategy allows brands to engage with their customers on their own terms, while still offering many opportunities for convenience enhancement and seamless shopping experiences. We have succeeded in providing numerous clients with omni-channel strategies and will assist many more.",
  },
  {
    id: 4,
    title: "INNOVATIVE TECHNOLOGY",
    content:
      "We are continuously exploring technological developments to capture new trends, and to capitalize on new opportunities for growth. We work with industry leading technological experts to build new capabilities and try to unlock the most ROI-effective solutions for our clients. Our technology products cover end-to-end e-commerce value chain and are built based on our practical experience of operating e-commerce businesses.",
  },
]
export default function WhatWeDo() {
  return (
    <>
      <div className="veojzQjoSI">
        <div className="cXjKWozutF">
          <div className="KbFTqrRWSD">
            <img alt="" className="uWXNYLrCyZ" src={image1} />
          </div>
          <ContainerMain>
            <div className="iNzXenhHCj">
              <div className="kQFHTLqPss">
                <div className="YYQohNmAHv">What We Do</div>
                <div className="fcCHdHMrJE">
                  {contents.map(content => {
                    return (
                      <div className="StjvRqrbev" key={content.id}>
                        <div className="NIIdwOtIXI">
                          <div className="IydGkLszEC">{content.title}</div>
                          <div className="aQkWOzxVNg">{content.content}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </ContainerMain>
        </div>
      </div>
    </>
  )
}

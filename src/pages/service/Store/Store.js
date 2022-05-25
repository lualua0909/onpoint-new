import BannerHeader from "pages/product/Common/BannerHeader"
import WhyNew from "pages/product/Common/WhyNew"
import GetStart from "pages/product/Common/GetStart"
import WhatWeDoV2 from 'pages/service/Common/WhatWeDoV2'
import LogoFooter from 'pages/service/Common/LogoFooter'

import banner from "images/Service/Store/banner-1.png"
import logoBanner1 from "images/Product/Store/logo-banner-1.png"

import new1 from "images/Service/Store/new-1.png"
import new2 from "images/Service/Store/new-2.png"
import new3 from "images/Service/Store/new-3.png"

import logo1 from "images/Service/Store/logo-1.png"
import logo2 from "images/Service/Store/logo-2.png"
import logo3 from "images/Service/Store/logo-3.png"
import logo4 from "images/Service/Store/logo-4.png"
import logo5 from "images/Service/Store/logo-5.png"
import imageBanner1 from "images/Service/Store/image-banner-1.png"

const contents = [
  {
    id: 1,
    title: "Store Onboarding & Operation",
    content:
      "With our efficient working process, we make sure your online store will be set up fast and on time.",
  },
  {
    id: 2,
    title: "Store Merchandising & Promotion Setup",
    content:
      "Our expertise focuses on need-base assortment, visibility mapping, diversified and dynamic promotion setup.",
  },
  {
    id: 3,
    title: "Campaign Planning & Management",
    content:
      "We implement tactics that grow online sales and improve customer lifetime value.",
  }
]

export default function Store() {
  return (
    <>
      <div>
        <BannerHeader
          breadcum="Home/ Services / E-store Management"
          banner={banner}
          logo={logoBanner1}
          listTitle={["E-store Management"]}
          description={
            "We excel at marketplace tools to generate leads, consistently updating content to keep your audience buzzing about your brand, while leveraging data to execute strategies that would lead to higher conversion.		"
          }
        />
        <WhyNew
          title={`Key Account Management`}
          description={`We make decisions regarding promotional strategies, pricing and product lines to 
          convert browsers into buyers.`}
          list={[
            {
              image: new1,
              title: "Account & Business Planning", 
              description:
                "Our dedicated team will consult and develop account strategy. We define building blocks and implement key actions to keep track of execution and growth. Our team will also manage account P&L, driving better revenues and lower expenses.",
            },
            {
              image: new2,
              title: "Assortment & Promotion Management ",
              description:
                "We select and optimize assortment portfolio based on demand forecasting and operational cost. We also use dynamic pricing and advanced promotion scheme to stay competitive in the market.",
            },
            {
              image: new3,
              title: "Co-brand Partnership",
              description:
                "We leverage portfolio of current clients to drive co-branding campaigns efficiently and measure the effectiveness through a wide range of shopper data.",
            },
          ]}
        />
        <WhatWeDoV2 contents={contents} image={imageBanner1} />
        <LogoFooter title="Marketplace Platform Partners" description="We help you tap into the growth potential of the leading marketplace platforms." list={[
          logo1,
          logo2,
          logo3,
          logo4,
          logo5,
        ]} />
        <GetStart />
      </div>
    </>
  )
}
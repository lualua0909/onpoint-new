import BannerHeader from "pages/product/Common/BannerHeader"
import LiveChat from 'pages/service/Common/LiveChat'
import BoxBackground from 'pages/service/Common/BoxBackground'
import GetStart from "pages/product/Common/GetStart"
import WhatWeDoV3 from "../Common/WhatWeDoV3"

import banner from "images/Service/Engagement/banner-1.png"
import image1 from "images/Home/WhatWeDo/image-1.png"
import imageBanner1 from "images/Service/Store/image-banner-1.png"

const contents = [
  {
    id: 1,
    title: "Answer FAQs in a Blink!",
    content:
      "Giving out greetings, FAQs and prepared answers to these FAQs",
  },
  {
    id: 2,
    title: "Re-route to CS When Needed",
    content:
      "Retaining human support can ensure best customer experience when needed.",
  },
  {
    id: 3,
    title: "Follow Shopper Journey",
    content:
      "Define shoppers footprints by codes - for example: first purchase, re-purchased, chatted, lapsed 3 months",
  },
  {
    id: 4,
    title: "Marketing Automation ",
    content:
      "For example, shoppers who has not come back for 6 months will automatically be sent a promotion offer via message, SMS or Zalo.",
  },
]

export default function Engagement() {
  return (
    <>
      <BannerHeader
        breadcum="Home/ Services/ Shopper Engagement"
        banner={banner}
        logo={''}
        listTitle={["Shopper Engagement"]}
        description={
          `Customer satisfaction is key to steady e-commerce growth for businesses, therefore, 
          we provide excellent customer service, making the shopping experience pleasant and easy.		`
        }
      />
      <LiveChat />
      <BoxBackground title="Rating & Review Management " description={`With well-trained agents who deeply understand about brands, products and 
      promotions, we deliver a 100% response rate and high volume chat management.`} />
      <WhatWeDoV3
        paddingTitleTop={115}
        titleHeader="CRM/CEM"
        descriptionHeader={`We continuously develop our CRM system through data analytics, chatbot, and 
        intent-base chat management strategy to review and take actions accordingly.`}
        contents={contents} image={imageBanner1} title="Our Integrated Automatic-CRM System" />
      <GetStart />
    </>
  )
}
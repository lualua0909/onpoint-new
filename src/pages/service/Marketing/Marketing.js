import BannerHeader from "pages/product/Common/BannerHeader"
import WhyProduct from "pages/product/Common/WhyProduct"

import banner from "images/Service/Marketing/banner-1.png"
import GetStart from "pages/product/Common/GetStart"
import WhyNew from "pages/product/Common/WhyNew"
import new1 from "images/Service/Marketing/new-1.png"
import new2 from "images/Service/Marketing/new-2.png"
import new3 from "images/Service/Marketing/new-3.png"

import WhatWeDo from "../Common/WhatWeDo"

import "./Marketing.scss"

const contents = [
  {
    id: 1,
    title: "On-Platform Media Performance",
    content:
      "Attract shoppers to your e-commerce stores on various platforms and ensure the best ROI through advertising, affiliate marketing, and marketing package buying implemented by our experienced team.",
  },
  {
    id: 2,
    title: "Off-Platform Media Performance",
    content:
      "Maximize marketing effectiveness in a digital age by performance campaigns run on social media channels and Google. We combine various campaign types and advertising formats to drive traffic to your e-commerce shops and increase conversions.",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    content:
      "Approach your target audience on social media platforms such as Facebook (both fanpage and community group), Instagram and TikTok with shopper-centric content to expand your customer base and improve engagement rate.",
  },
  {
    id: 4,
    title: "Influencer Marketing ",
    content:
      "Take advantage of bloggers and influencers in various segments & categories to get your brand in front of a massive targeted audience. We not only collaborate with different types of influencers but also top-notch experts and professionals.",
  },
]


export default function Marketing() {
  return (
    <>
      <div>
        <BannerHeader
          breadcum="Home/ Products/ E-commerce Store Management"
          banner={banner}
          logo={''}
          listTitle={["E-marketing Management"]}
          description={
            `We propose a wide range of digital marketing services through data-driven and audience 
            focused solutions, enabling you to select the ones that best suits your needs and goals. 
            We ensure that your brands life cycle continues to grow and thrive online.			`
          }
        />
        <WhyProduct
          title={"Media & Influencer Marketing"}
          marginTitle={"0 0 24px 0"}
          description={`We provide performance-based marketing solutions with the right mix of
           advertising media channels and optimize process to achieve sustainable business goals.`}
          image={''}
        />
        <WhatWeDo contents={contents} />
        <WhyNew
          title={`Creative & Content Production`}
          description={`We develop scalable content marketing strategies for every stage of your funnel and 
          every milestone of your customer’s journey`}
          list={[
            {
              image: new1,
              title: "Creative & Design",
              description:
                "Produce unique and memorable designs that stand out so that shoppers may easily identify your brand or product. Our in-house art team use a keen sense of creativity, in line with brand and platform guideline to create a wide range of designs that capture your shoppers attention effectively.",
            },
            {
              image: new2,
              title: "Content Marketing ",
              description:
                "Tell compelling brand stories with an aim to informing, entertaining, and connecting at every stage of the customer journey. We develop content marketing strategies that create undeniable value for your audience and make you the go-to brand they trust.",
            },
            {
              image: new3,
              title: "Production Livestream & Video",
              description:
                "Live in the now, reach a massive audience and experience instant results. We have experience in creating an exciting yet smooth live atmosphere with shoppertainment content on multi-channel livestream platforms such as Facebook and e-commerce platforms for your promotion or product launching events. ",
            },
          ]}
        />
        <GetStart />
      </div>
    </>
  )
}

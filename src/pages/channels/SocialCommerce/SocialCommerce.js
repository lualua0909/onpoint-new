import BannerHeader from "pages/product/Common/BannerHeader"
import GetStart from "pages/product/Common/GetStart"
import Partner from "pages/channels/SocialCommerce/components/Partner"
import OurProducts from "pages/channels/SocialCommerce/components/OurProducts"
import ModelConcept from "pages/channels/SocialCommerce/components/ModelConcept"
import ModelConcept2 from "pages/channels/SocialCommerce/components/ModelConcept2"
import Solutions from "pages/channels/SocialCommerce/components/Solutions"
import WhyNew from "pages/product/Common/WhyNew"

import banner from "images/Channels/SocialCommerce/banner-1.png"
import new1 from "images/Channels/SocialCommerce/new-1.png"
import new2 from "images/Channels/SocialCommerce/new-2.png"
import new3 from "images/Channels/SocialCommerce/new-3.png"
import new4 from "images/Channels/SocialCommerce/new-4.png"
import new5 from "images/Channels/SocialCommerce/new-5.png"
import new6 from "images/Channels/SocialCommerce/new-6.png"

export default function SocialCommerce() {
  return (
    <>
      <BannerHeader
        breadcum="Home/ Channels/ Marketplace"
        banner={banner}
        logo={''}
        listTitle={["Marketplace"]}
        description={
          "Vietnam's No.1 Ecommerce Platforms Partner	 "
        }
      />
      <Partner />
      <OurProducts />
      <ModelConcept />
      <WhyNew
        title={`A - Z Livestream`}
        description={``}
        list={[
          {
            image: new1,
            title: "Livestream planning",
            description:
              "With our A-Z livestream service, we carefully plan content and prepare enticing social media content to tackle all up-coming company events and brand deals, therefore allowing for a smooth process run and increased customer reach.",
          },
          {
            image: new2,
            title: "Livestream production ",
            description:
              "We offer longstanding experience in livestream and virtual media content production. By providing our dedicated team comprising of technical and operational experts, unique brand content and a thorough timeline including clear instructions for stakeholders involved on recording day, to drive greater process efficiency and provide our brands with a seamless process.",
          },
          {
            image: new3,
            title: "Media optimization",
            description:
              "We offer real-time media optimization using data analytics and insightful dashboards to create high ROI for our livestreaming sessions.",
          },
        ]}
      />
      <ModelConcept2 />
      <WhyNew
        title={`Landing Page Solution`}
        description={`A landing page is a standalone web to help brands improve the feature of product 
listings & order collection on social media channels. This makes shopping journey be 
more convenient for both buyers and sellers.`}
        list={[
          {
            image: new4,
            title: "2-hour Set Up",
            description:
              "It takes only 2 hours to set up and release a fully-integrated landing page with customers services, payment, fulfillment, and delivery facilities.",
          },
          {
            image: new5,
            title: "Dynamic Layout ",
            description:
              "We can create any layout with best-in-class UI/UX and optimize it to meet your needs and increase your sales.",
          },
          {
            image: new6,
            title: "Own Your Data",
            description:
              "Own your data to re-marketing for next campaigns & more.",
          },
        ]}
      />
      <Solutions />
      <GetStart />
    </>
  )
}

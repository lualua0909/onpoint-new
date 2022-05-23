import BannerHeader from "../Common/BannerHeader"
import WhyProduct from "../Common/WhyProduct"
import WhyOcto from "../Common/WhyOcto"
import Business from "./components/Business"
import GetStart from "../Common/GetStart"

import banner from "images/Product/Integrated/banner-1.png"
import logoBanner1 from "images/Product/Integrated/logo-banner-1.png"
import whatWeOffer from "images/Product/Integrated/phone-1.png"
import icon1 from "images/Product/Integrated/icon-1.png"
import icon2 from "images/Product/Integrated/icon-2.png"
import icon3 from "images/Product/Integrated/icon-3.png"
import imageWork from "images/Product/Integrated/image-work.png"

export default function Integrated() {
  return (
    <>
      <BannerHeader
        banner={banner}
        logo={logoBanner1}
        listTitle={["Online-Offline Integrated", "Order Management"]}
        description={
          "O2O Order Management System to Enable Omni-channel Retail "
        }
      />
      <WhyProduct
        title={"What We Offer"}
        marginTitle={"0 0 24px 0"}
        description={`OctoPOS, a system that consolidates and aggregates shopper demand across multi 
        e-commerce platforms then processes and delivers a cost-effective fulfillment 
        solution to enhance brand shopping experience.`}
        image={whatWeOffer}
      />
      <WhyOcto
        list={[
          {
            image: icon1,
            title: "Improve cost-to-serve",
            description: `With OctoPOS, orders can be fulfilled with inventory at offline distributor's warehouses or offline retail stores. This solution can shorten the delivery time by 75% compared with conventional e-commerce fulfillment.`,
          },
          {
            image: icon2,
            title: "Enhance shopper experience",
            description:
              "Customers will receive goods faster with cheaper delivery fees from the nearest point of supply.",
          },
          {
            image: icon3,
            title: "Simplify e-commerce operating systems",
            description: `Orders will be processed and packed at local warehouses, saving 50% of the time compared to the packaging process at the brand's central warehouse.`,
          },
        ]}
      />

      <WhyProduct
        title={"How It Works"}
        marginTitle={"0 0 101px 0"}
        description={``}
        image={imageWork}
      />
      <Business />
      <div className="mTRKMQNVXW">
        <div className="dsFanFLgkf">Visit and experience OctoSells now!</div>
      </div>
      <GetStart />
    </>
  )
}

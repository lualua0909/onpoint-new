import BannerHeader from "../Common/BannerHeader"
import WhyProduct from "../Common/WhyProduct"

import banner from "images/Product/Store/banner-1.png"
import logoBanner1 from "images/Product/Store/logo-banner-1.png"
import whatWeOffer from "images/Product/Store/what-we-offer.png"
import WhyNew from "../Common/WhyNew"
import new1 from "images/Product/Store/new-1.png"
import new2 from "images/Product/Store/new-2.png"
import new3 from "images/Product/Store/new-3.png"
import new4 from "images/Product/Store/new-4.png"
import new5 from "images/Product/Store/new-5.png"
import icon1 from "images/Product/Store/icon-1.png"
import icon2 from "images/Product/Store/icon-2.png"
import icon3 from "images/Product/Store/icon-3.png"

import "./Store.scss"
import WhyOcto from "../Common/WhyOcto"
import GetStart from "../Common/GetStart"

export default function Store() {
  return (
    <>
      <div>
        <BannerHeader
          breadcum="Home/ Products/ E-commerce Store Management"
          banner={banner}
          logo={logoBanner1}
          listTitle={["E-Commerce Store Management"]}
          description={
            "No. 1 Multichannel E-commerce Solution for Small & Medium Size Sellers"
          }
        />
        <WhyProduct
          title={"What We Offer"}
          marginTitle={"0 0 24px 0"}
          description={`OctoSells, a leading multi-channel e-commerce management 
        solution with exclusive features.`}
          image={whatWeOffer}
        />
        <WhyOcto
          list={[
            {
              image: icon1,
              title:
                "Be the only solution with chat function approved by both Lazada and Shopee",
              description:
                "There is no risk of losing account since OctoSells is an authorized solution provider.",
            },
            {
              image: icon2,
              title:
                "Maximize revenue with the real-time inventory synchronization solution",
              description:
                "You would not lose business opportunities, oversell or mis-sync across multiple platforms as OctoSells instantly updates your inventory on all platforms as soon as a new order or inventory change occurs.",
            },
            {
              image: icon3,
              title: "Save 65% time with mass order processing",
              description:
                "Batch processing 100 orders on OctoSells is as simple as processing 1 order.",
            },
          ]}
        />
        <WhyNew
          title={`What We Deliver`}
          list={[
            {
              image: new1,
              title: "Store management",
              description:
                "Centrally manage your multi-channel stores in a single place. Make it straightforward to manage products and orders.",
            },
            {
              image: new2,
              title: "Order management system",
              description:
                "Manage orders from multiple selling platforms in one place. ",
            },
            {
              image: new3,
              title: "Product management system",
              description:
                "Manage master products (single, physical, virtual) and sell products on multiple channels.",
            },
            {
              image: new4,
              title: "Inventory management system",
              description:
                "Manage inventory from multiple warehouses partners, e-commerce marketplace platforms",
            },
            {
              image: new5,
              title:
                "Analyze the effectiveness of multi-channel sales strategy",
              description:
                "Create a sales plan based on actual business results.",
            },
          ]}
        />
        <div className="mTRKMQNVXW">
          <div className="dsFanFLgkf">Visit and experience OctoSells now!</div>
        </div>
        <GetStart />
      </div>
    </>
  )
}

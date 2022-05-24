import BannerHeader from "pages/product/Common/BannerHeader"
import WhyProduct from "pages/product/Common/WhyProduct"

import banner from "images/Product/Store/banner-1.png"
import logoBanner1 from "images/Product/Store/logo-banner-1.png"
import GetStart from "pages/product/Common/GetStart"

import "./Marketing.scss"

export default function Marketing() {
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
        
        <GetStart />
      </div>
    </>
  )
}

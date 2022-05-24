import BannerHeader from "../Common/BannerHeader"
import WhyProduct from "../Common/WhyProduct"
import GetStart from "../Common/GetStart"

import banner from "images/Product/Performance/banner-1.png"
import new1 from "images/Product/Performance/new-1.png"
import new2 from "images/Product/Performance/new-2.png"
import new3 from "images/Product/Performance/new-3.png"

export default function Performance() {
  return (
    <>
      <BannerHeader
        breadcum="Home/ Products/ Performance Dashboard"
        banner={banner}
        logo={""}
        listTitle={["Performance Dashboard"]}
        description={
          "Measure and magnify your impact with our power performance dashboard."
        }
      />
      <WhyProduct
        title={"Shopper segmentation"}
        marginTitle={"0 0 24px 0"}
        description={`Segment Shoppers (new/returning/lapsed/unique shopper) in each 
        sub-category across different platforms.	`}
        image={new1}
      />
      <WhyProduct
        title={`Best performing products 
        & categories`}
        marginTitle={"0 0 24px 0"}
        description={`Include top categories, top subcategories, and top assortments	`}
        image={new2}
      />
      <WhyProduct
        title={"Traffic & conversion"}
        marginTitle={"0 0 24px 0"}
        description={`We provide visibility in terms of sales, shoppers, inventory, 
        traffic, and conversion.	`}
        image={new3}
      />
      <div style={{ marginTop: 87 }}></div>
      <GetStart />
    </>
  )
}

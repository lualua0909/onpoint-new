import BannerHeader from "pages/product/Common/BannerHeader"
import GetStart from "pages/product/Common/GetStart"

import banner from "images/channels/Brand/banner-1.png"

export default function Brand() {
  return (
    <>
      <BannerHeader
        breadcum="Home/ Products/ Online-Offline Integrated Order Management"
        banner={banner}
        logo={''}
        listTitle={["Online-Offline Integrated", "Order Management"]}
        description={
          "O2O Order Management System to Enable Omni-channel Retail "
        }
      />
      <GetStart />
    </>
  )
}

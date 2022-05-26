import BannerHeader from "pages/product/Common/BannerHeader"
import GetStart from "pages/product/Common/GetStart"
import LogoFooter from 'pages/service/Common/LogoFooter'
import SiderNew from 'pages/channels/Marketplace/components/SiderNew'

import banner from "images/Channels/Marketplace/banner-1.png"
import logo1 from "images/Service/Store/logo-1.png"
import logo2 from "images/Service/Store/logo-2.png"
import logo3 from "images/Service/Store/logo-3.png"
import logo4 from "images/Service/Store/logo-4.png"
import logo5 from "images/Service/Store/logo-5.png"

export default function Marketplace() {
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
      <SiderNew />
      <LogoFooter title="Marketplace Platforms Partner" description="We help you tap into the growth potential of the leading marketplace platforms." list={[
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
      ]} />
      <GetStart />
    </>
  )
}

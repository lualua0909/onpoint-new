import BannerHeader from "pages/product/Common/BannerHeader"
import GetStart from "pages/product/Common/GetStart"
import NewRow from "pages/service/Common/NewRow"
import LogoFooter from 'pages/service/Common/LogoFooter'

import banner from "images/Service/Logistics/banner-1.png"

import logo1 from "images/Service/Logistics/logo-1.png"
import logo2 from "images/Service/Logistics/logo-2.png"
import logo3 from "images/Service/Logistics/logo-3.png"
import logo4 from "images/Service/Logistics/logo-4.png"
import logo5 from "images/Service/Logistics/logo-5.png"

import new1 from "images/Service/Logistics/new-1.png"
import new2 from "images/Service/Logistics/new-2.png"
import new3 from "images/Service/Logistics/new-3.png"

import './Logistics.scss'

export default function Logistics() {
  return (
    <>
      <BannerHeader
        breadcum="Home/ Products/ Omnichannel Logistics & Fulfilment"
        banner={banner}
        logo={''}
        listTitle={["Omni-channel Logistics & Fulfilment"]}
        description={
          `Our team is dedicated to help brands improve its supply chain efficiency, increasing sales 
          and profits, and optimizing cost structure while improving inventory levels.`
        }
      />
      <div className="hkpaibajrw">
        <NewRow
          paddingText={` 0 0 0 65px`}
          image={new1}
          title="B2B/B2C Warehousing"
          more="Stay ahead in competition"
          description={`We offer an ideal warehousing solution for efficient handling of 
B2B and B2C fulfillment. The comprehensive solution is rich in 
functionality and scalable in nature, thus catering to end-to-end 
warehousing needs.`} />
        <NewRow
          position={'right'}
          paddingText={` 0 65px 0 0`}
          image={new2}
          title="Customized Fulfilment & Packaging"
          more="Be unique with sustainable growth"
          description={`We understand the value of making your brand stand-out. Our 
customized e-commerce packaging solutions make a bold 
statement about your brand while improving customer 
satisfaction with eco-friendly e-commerce packaging solutions. 
We strictly follow operational objectives set by marketplace and 
ensure the lead time could be met. In terms of special packaging, 
we could optimize fulfilment cost due to our large-scale business.`} />
        <NewRow
          paddingText={` 0 0 0 65px`}
          image={new3}
          title="Multi Warehouses & Last Mile Solution"
          more="Be faster, transparent, and efficient"
          description={`We provide an unified, multi-location warehousing and inventory 
management, and a robust last mile delivery solution that are 
seamlessly integrated into your WMS/TMS to become a win-
solution for brands and consumers.`} />
      </div>

      <LogoFooter title="Marketplace Platform Partners" description="" list={[
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
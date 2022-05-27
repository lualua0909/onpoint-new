import BannerHeader from "pages/product/Common/BannerHeader"
import GetStart from "pages/product/Common/GetStart"
import NewsBrand from "pages/channels/Brand/components/NewsBrand"
import LogoFooter from 'pages/service/Common/LogoFooter'

import banner from "images/channels/Brand/banner-1.png"
import logo1 from "images/channels/Brand/logo-1.png"
import logo2 from "images/channels/Brand/logo-2.png"

export default function Brand() {
  return (
    <>
      <BannerHeader
        breadcum="Home/ Channels/ Brand.com"
        banner={banner}
        logo={''}
        listTitle={["Brand.com"]}
        description={
          "We offer a powerful tool to help you increase your ownership of customer data and directly engage with customers along their shopping journey "
        }
      />
      <NewsBrand />
      <LogoFooter title="In Compatible With " description="" list={[
        logo1,
        logo2,
      ]} />
      <GetStart />
    </>
  )
}

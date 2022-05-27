import BannerHeader from "pages/product/Common/BannerHeader"
import Mission from "pages/Company/About/components/Mission"
import Leadership from "pages/Company/About/components/Leadership"
import OurHistory from "pages/Company/About/components/OurHistory"
import GetStart from "pages/product/Common/GetStart"

import banner from "images/Company/About/banner-1.png"

export default function About() {
  return (
    <>
      <BannerHeader
        breadcum="Home/ Company/ About Us"
        banner={banner}
        logo={''}
        listTitle={["About Us"]}
        description={
          `OnPoint is the leading e-commerce enabler in Southeast Asia. Our mission is to develop a 
comprehensive ecosystem and help businesses thrive online. We invest in technology and 
build the strongest team in the market with outstanding e-commerce expertise and passion for 
serving clients. We provide businesses with exclusive one-stop solutions, data-driven 
products, and continuous innovations to unlock digital market growth potential.`
        }
      />
      <Mission />
      <Leadership />
      <OurHistory />
      <GetStart />
    </>
  )
}
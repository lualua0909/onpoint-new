import BannerHeader from "pages/product/Common/BannerHeader"
import GetStart from "pages/product/Common/GetStart"
import JobOpen from "pages/company/Job/components/JobOpen"
import OurOffice from "pages/company/Job/components/OurOffice"
import OurPeople from "pages/company/Job/components/OurPeople"
import OurBenefits from "pages/company/Job/components/OurBenefits"

import banner from "images/Company/Blog/banner-1.png"

export default function Job () {
  return (
    <>
     <BannerHeader
        breadcum="Home/ Company/ Blogs"
        banner={banner}
        logo={''}
        listTitle={["Blogs"]}
        description={
          `Here you can get the latest product updates, guides, and tips for thriving in 
e-commerce with us. ​`
        }
      />
      <JobOpen />
      <OurOffice />
      <OurPeople />
      <OurBenefits />
      <GetStart />
    </>
  )
}
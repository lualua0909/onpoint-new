import BannerHeader from "pages/product/Common/BannerHeader"
import GetStart from "pages/product/Common/GetStart"
import Tabnew from "pages/company/Blog/components/Tabnew"
import ListArticle from "pages/company/Blog/components/ListArticle"

import banner from "images/Company/Blog/banner-1.png"

export default function Blog () {
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
      <Tabnew />
      <ListArticle />
      <GetStart />
    </>
  )
}
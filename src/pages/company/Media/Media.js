import BannerHeader from "pages/product/Common/BannerHeader"
import GetStart from "pages/product/Common/GetStart"
import MediaLibrary from "pages/company/Media/components/MediaLibrary"
import PressCoverage from "pages/company/Media/components/PressCoverage"

import banner from "images/Company/Media/banner-1.png"

export default function Media () {
  return (
    <>
     <BannerHeader
        breadcum="Media"
        banner={banner}
        logo={''}
        listTitle={["Blogs"]}
        description={
          `Welcome to our media center! You will find news coverage and media-
relevant images related to our corporate here. ​`
        }
      />
      <MediaLibrary />
      <PressCoverage />
      <GetStart />
    </>
  )
}
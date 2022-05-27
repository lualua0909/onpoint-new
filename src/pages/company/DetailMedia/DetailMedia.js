import ContainerMain from "pages/common/ContainerMain"
import RecentPost from "pages/company/Blog/components/RecentPost"
import Comment from "pages/company/DetailMedia/components/Comment"

import icon1 from "images/Company/DetailMedia/icon-1.png"
import icon2 from "images/Company/DetailMedia/icon-2.png"
import icon3 from "images/Company/DetailMedia/icon-3.png"

import './DetailMedia.scss'

export default function DetailMedia() {
  return (
    <>
      <div className="xWGPkgbWpD">
        <ContainerMain>
          <div className="izRttrlrZJ">
            <div className="UjHOdtyHMl">
              <div className="YSEPZDFLuY">Home/ Company/ Blogs/ How to encrypt your data with Ecto</div>
              <div className="aBwyOoWAOm">How to encrypt your data with Ecto</div>
              <div className="lwSGgXjrLt"><span className="uUFdkkrHht">March 19, 2021</span> / <span className="XpxQGeikuV">by Onpoint</span></div>
              <div className="GDFNqntkZL"><img className="HUYbRINTZf" /></div>
              <div className="iReAEpJwuv">
                The ecommerce world today is all about data. It’s not a nice-to-have but rather a must-have. Why? Because the richer the data, the better the decision brands make.

                Collecting data is easy when brands have their own ecommerce website or what we call 1st party data. Some channel partners do share their data to a certain extent, that’s called 2nd party data. The 3rd party data, which is a set of data collected from sources by a company that isn’t directly involved in the transaction, will help brands drive successful action and increase their ecommerce sales.

                Brands in Southeast Asia are accustomed to ‘surveyed data’, but have a limited amount of data from online marketplaces, so much so that it is insufficient for them to craft a successful online marketplace strategy.

                BrandIQ is envisioned to provide brands in Southeast Asia with measurable data and actionable insights for their online commerce strategy. Using sophisticated ecommerce data collection and proprietary machine learning technologies, BrandIQ will empower brands to monitor online merchandise, analyze competitors, offer better promotions, understand consumer sentiments, and improve the overall ecommerce experience.
              </div>
              <div className="vTDZcgzXlT">
                <div className="aiCGvGfeGQ">
                  <div className="kKQRMCybEB"><img alt="" src={icon1} className="FZIFqXjbvU" /></div>
                  <div className="kKQRMCybEB"><img alt="" src={icon2} className="FZIFqXjbvU" /></div>
                </div>
                <div className="IAyLkOxOvX">
                  <div className="ePUYkNDIpj"><img alt="" src={icon3} className="NVXpNzBDFL" /></div>
                </div>
              </div>
              <div className="mdbbUMALxG">
                <div className="RqxlFDrNaH">Comment</div>
                <div className="DlUdNTQWLs">
                  {
                    [0, 1, 2].map((item) => {
                      return (
                        <Comment />
                      )
                    })
                  }
                  <div className="bBwrXjDyJu">Load more</div>
                </div>
              </div>
            </div>
            <div className="wGeVinNUvI">
              <RecentPost />
            </div>
          </div>
        </ContainerMain>
      </div>
    </>
  )
}
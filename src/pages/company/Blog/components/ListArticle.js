import ContainerMain from "pages/common/ContainerMain"
import RecentPost from "pages/company/Blog/components/RecentPost"

import new2 from "images/Company/Blog/new-2.png"
import new3 from "images/Company/Blog/new-3.png"
import new4 from "images/Company/Blog/new-4.png"
import new5 from "images/Company/Blog/new-5.png"
import new6 from "images/Company/Blog/new-6.png"
import new7 from "images/Company/Blog/new-7.png"

import './ListArticle.scss'

const dataNews = [
  {
    type: 'Blogs',
    date: '18:00 22/2/2022',
    title: "What are the trends driving innovation in the e-commerce...",
    description: 'Social commerce is still one of the biggest driving trends in China today, and it continues to spread the impact to Southeast Asia. We have seen the rise of the succ...',
    image: new2,
  },
  {
    type: 'Blogs',
    date: '18:00 22/2/2022',
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing...',
    image: new3,
  },
  {
    type: 'Blogs',
    date: '18:00 22/2/2022',
    title: "What are the trends driving innovation in the e-commerce...",
    description: 'Social commerce is still one of the biggest driving trends in China today, and it continues to spread the impact to Southeast Asia. We have seen the rise of the succ...',
    image: new4,
  },
  {
    type: 'Blogs',
    date: '18:00 22/2/2022',
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing...',
    image: new5,
  },
  {
    type: 'Blogs',
    date: '18:00 22/2/2022',
    title: "What are the trends driving innovation in the e-commerce...",
    description: 'Social commerce is still one of the biggest driving trends in China today, and it continues to spread the impact to Southeast Asia. We have seen the rise of the succ...',
    image: new6,
  },
  {
    type: 'Blogs',
    date: '18:00 22/2/2022',
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing...',
    image: new7,
  },
]




export default function ListArticle() {
  return (
    <>
      <div className="VIzbRIezNE">
        <ContainerMain>
          <div className="OWYQYrbSlL">
            <div className="LnoDdPfJYx">
              <div className="rncsAbrojA">List Article</div>
              <div className="BQYBwleGVH">
                {
                  dataNews.map((item) => {
                    return (
                      <div className="IUstSPGGrP">
                        <div className="wLUssYFvGR"><img src="" className="gwvsMnkfbz" alt="" /></div>
                        <div className="hpImtGpVLP">
                          <div className="IOJsUtrbRb">Blogs</div>
                          <div className="kDrzfqyshA">18:00 22/2/2022</div>
                        </div>
                        <div className="xfCVgLMdXb">What are the trends driving innovation in the e-commerce...</div>
                        <div className="KIkGZkcCQG">Social commerce is still one of the biggest driving trends in China today, and it continues to spread the impact to Southeast Asia. We have seen the rise of the succ...</div>
                        <div className="SSpfThAirx">Read more</div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="rdpzfrwdBl">
              <RecentPost />
            </div>
          </div>
        </ContainerMain>
      </div>
    </>
  )
}
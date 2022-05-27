import ContainerMain from "pages/common/ContainerMain"

import user1 from 'images/Company/About/user-1.png'
import user2 from 'images/Company/About/user-2.png'

import './Leadership.scss'

const listUser = [
  {
    image: user2,
    name: 'Nguyen Huy Hoang',
    position: 'Chief Business Officer'
  },
  {
    image: user2,
    name: 'Chin Wee Tee',
    position: 'COO'
  },
  {
    image: user2,
    name: 'Nguyen Huy Hoang',
    position: 'Chief Business Officer'
  },
  {
    image: user2,
    name: 'Nguyen Huy Hoang',
    position: 'Chief Business Officer'
  },
  {
    image: user2,
    name: 'Nguyen Huy Hoang',
    position: 'Chief Business Officer'
  },
  {
    image: user2,
    name: 'Nguyen Huy Hoang',
    position: 'Chief Business Officer'
  },
  {
    image: user2,
    name: 'Nguyen Huy Hoang',
    position: 'Chief Business Officer'
  },
  {
    image: user2,
    name: 'Nguyen Huy Hoang',
    position: 'Chief Business Officer'
  }
]

export default function Leadership() {
  return (
    <>
      <div className="nwcjbovxvs">
        <ContainerMain>
          <div className="tsjsriqrqj">
            <div className="dpgzikpmfu">Leadership</div>
            <div className="nepxrmvjpl">Build your online business success with our e-commerce expertise.</div>
            <div className="wrbbyzmhzv">Our leadership team have experience in leading the successes of top global and
              regional companies. We share a passion for driving the next e-commerce evolutions.</div>
            <div className="ceozyvcdlh">
              <div className="brbcjxqmdo">
                <div className="ycqkfhvkmn">Tran Vu Quang</div>
                <div className="wtvrdtchxj">Founder & CEO</div>
                <div className="wejmwdhvxx">
                  Quang is the Founder and CEO of OnPoint. Prior to
                  OnPoint, Quang worked as the Chief Commercial Officer at
                  Lazada Vietnam since 2014. Previously, Quang was also an
                  Executive Assistant for Vingroup Chairman.

                  Quang graduated from Reed College (USA), and started his
                  career at McKinsey as a management consultant, advising
                  various businesses in retail, banking, energy sector across
                  Vietnam, Indonesia, and Singapore.
                </div>
              </div>
              <div className="hbgldslfxb">
                <img src={user1} alt="" className="eowtdhlhvl" />
              </div>
            </div>
          </div>
        </ContainerMain>
      </div>
      <div className="lppehqasvq">
        <ContainerMain>
          <div className="yxnsfyxays">
            {
              listUser.map((item) => {
                return (
                  <div className="jljbxsxkgo">
                    <div className="eszpdechnj"><img src={item?.image} className="ublinznkzk" alt="" /></div>
                    <div className="ukfgnyzugv">
                      <div className="vynjksrnfx">{item?.name}</div>
                      <div className="hvweqszmiv">{item?.position}</div>
                    </div>
                  </div>
                )
              })
            }
            <div className="jljbxsxkgo mdosmursmc"></div>
            <div className="jljbxsxkgo mdosmursmc"></div>
          </div>
        </ContainerMain>
      </div>
    </>
  )
}
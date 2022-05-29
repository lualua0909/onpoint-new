import ContainerMain from "pages/common/ContainerMain"
import { Popover } from 'antd'

import user1 from 'images/Company/About/user-1.png'
import user2 from 'images/Company/About/user-2.png'
import user3 from 'images/Company/About/user-3.png'
import user4 from 'images/Company/About/user-4.png'
import user5 from 'images/Company/About/user-5.png'
import user6 from 'images/Company/About/user-6.png'
import user7 from 'images/Company/About/user-7.png'
import user8 from 'images/Company/About/user-8.png'
import user9 from 'images/Company/About/user-9.png'
import user10 from 'images/Company/About/user-10.png'
import user11 from 'images/Company/About/user-11.png'
import user12 from 'images/Company/About/user-12.png'

import './Leadership.scss'

const listUser = [
  {
    image: user2,
    name: 'Nguyen Huy Hoang',
    position: 'Chief Business Officer',
    description: `Quang is the Founder and CEO of OnPoint. Prior to OnPoint, Quang worked as the Chief Commercial Officer at Lazada Vietnam since 2014. Previously, Quang was also an Executive Assistant for Vingroup Chairman. 

    Quang graduated from Reed College (USA), and started his career at McKinsey as a management consultant, advising various businesses in retail, banking, energy sector across Vietnam, Indonesia, and Singapore.`,
  },
  {
    image: user3,
    name: 'Chin Wee Tee',
    position: 'COO',
    description: `Quang is the Founder and CEO of OnPoint. Prior to OnPoint, Quang worked as the Chief Commercial Officer at Lazada Vietnam since 2014. Previously, Quang was also an Executive Assistant for Vingroup Chairman. 

    Quang graduated from Reed College (USA), and started his career at McKinsey as a management consultant, advising various businesses in retail, banking, energy sector across Vietnam, Indonesia, and Singapore.`,
  },
  {
    image: user4,
    name: 'Le Minh Duy',
    position: 'Chief Technology Officer',
    description: `Quang is the Founder and CEO of OnPoint. Prior to OnPoint, Quang worked as the Chief Commercial Officer at Lazada Vietnam since 2014. Previously, Quang was also an Executive Assistant for Vingroup Chairman. 

    Quang graduated from Reed College (USA), and started his career at McKinsey as a management consultant, advising various businesses in retail, banking, energy sector across Vietnam, Indonesia, and Singapore.`,
  },
  {
    image: user5,
    name: 'Tran Quang Thach',
    position: 'Chief of Staff',
    description: `Quang is the Founder and CEO of OnPoint. Prior to OnPoint, Quang worked as the Chief Commercial Officer at Lazada Vietnam since 2014. Previously, Quang was also an Executive Assistant for Vingroup Chairman. 

    Quang graduated from Reed College (USA), and started his career at McKinsey as a management consultant, advising various businesses in retail, banking, energy sector across Vietnam, Indonesia, and Singapore.`,
  },
  {
    image: user6,
    name: 'Doan Nguyen Da Huong',
    position: 'Business Development Director',
    description: `Quang is the Founder and CEO of OnPoint. Prior to OnPoint, Quang worked as the Chief Commercial Officer at Lazada Vietnam since 2014. Previously, Quang was also an Executive Assistant for Vingroup Chairman. 

    Quang graduated from Reed College (USA), and started his career at McKinsey as a management consultant, advising various businesses in retail, banking, energy sector across Vietnam, Indonesia, and Singapore.`,
  },
  {
    image: user7,
    name: 'Tran Thi Tuong Van',
    position: 'Business Development Director',
    description: `Quang is the Founder and CEO of OnPoint. Prior to OnPoint, Quang worked as the Chief Commercial Officer at Lazada Vietnam since 2014. Previously, Quang was also an Executive Assistant for Vingroup Chairman. 

    Quang graduated from Reed College (USA), and started his career at McKinsey as a management consultant, advising various businesses in retail, banking, energy sector across Vietnam, Indonesia, and Singapore.`,
  },
  {
    image: user8,
    name: 'Peter Kua',
    position: 'Head of Data & Analytics Centre of Excellence',
    description: `Quang is the Founder and CEO of OnPoint. Prior to OnPoint, Quang worked as the Chief Commercial Officer at Lazada Vietnam since 2014. Previously, Quang was also an Executive Assistant for Vingroup Chairman. 

    Quang graduated from Reed College (USA), and started his career at McKinsey as a management consultant, advising various businesses in retail, banking, energy sector across Vietnam, Indonesia, and Singapore.`,
  },
  {
    image: user9,
    name: 'Tran Minh Duy',
    position: 'Head of Business Development',
    description: `Quang is the Founder and CEO of OnPoint. Prior to OnPoint, Quang worked as the Chief Commercial Officer at Lazada Vietnam since 2014. Previously, Quang was also an Executive Assistant for Vingroup Chairman. 

    Quang graduated from Reed College (USA), and started his career at McKinsey as a management consultant, advising various businesses in retail, banking, energy sector across Vietnam, Indonesia, and Singapore.`,
  },
  {
    image: user10,
    name: 'Nguyen Le Hung',
    position: 'Head of Strategy',
    description: `Quang is the Founder and CEO of OnPoint. Prior to OnPoint, Quang worked as the Chief Commercial Officer at Lazada Vietnam since 2014. Previously, Quang was also an Executive Assistant for Vingroup Chairman. 

    Quang graduated from Reed College (USA), and started his career at McKinsey as a management consultant, advising various businesses in retail, banking, energy sector across Vietnam, Indonesia, and Singapore.`,
  },
  {
    image: user11,
    name: 'Nguyen Thi Hong Nhung',
    position: 'Associate Commercial Director',
    description: `Quang is the Founder and CEO of OnPoint. Prior to OnPoint, Quang worked as the Chief Commercial Officer at Lazada Vietnam since 2014. Previously, Quang was also an Executive Assistant for Vingroup Chairman. 

    Quang graduated from Reed College (USA), and started his career at McKinsey as a management consultant, advising various businesses in retail, banking, energy sector across Vietnam, Indonesia, and Singapore.`,
  },
  {
    image: user12,
    name: 'Huynh Thuy Quynh Giao',
    position: 'Commercial Director',
    description: `Quang is the Founder and CEO of OnPoint. Prior to OnPoint, Quang worked as the Chief Commercial Officer at Lazada Vietnam since 2014. Previously, Quang was also an Executive Assistant for Vingroup Chairman. 

    Quang graduated from Reed College (USA), and started his career at McKinsey as a management consultant, advising various businesses in retail, banking, energy sector across Vietnam, Indonesia, and Singapore.`,
  },
]

export default function Leadership() {

  const hoverDetail = (name, position, description) => {
    return (
      <>
        <div className="dffcWxOeNW">
          <div className="MQpcLRQujV">{name}</div>
          <div className="WkmrRrGpWz">{position}</div>
          <div className="yLQguCYMWv">{description}</div>
        </div>
      </>
    )
  }
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
                    <div className="eszpdechnj">
                      {hoverDetail(item?.name, item.position, item.description)}
                      <img src={item?.image} className="ublinznkzk" alt="" />
                    </div>
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
      </div >
    </>
  )
}

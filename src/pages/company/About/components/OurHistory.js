import ContainerMain from "pages/common/ContainerMain"

import arrowRight from 'images/Company/About/icon-arrow-right.png'
import arrowLeft from 'images/Company/About/icon-arrow-left.png'

import './OurHistory.scss'

const list = [
  {
    year: '2021',
    list: [
      {
        contents: [
          {
            title: 'OnPoint was awarded "Technode ORIGIN Award"',
            description: `OnPoint received the Technode ORIGIN Innovation Awards in the e-commerce category.The award recognizes outstanding startups, corporate innovators, and movers and shakers in the Asia Pacific region poised for growth.`
          },
          {
            title: 'OnPoint was listed in the "VNR500"',
            description: `OnPoint was listed in the “VNR500" (the 500 largest private enterprises in Vietnam) by the Vietnam Report JSC and online newspaper VietNamNet. It was a well-deserved recognition for the company's efficiency and business capacity.`
          }
        ],
        month: 'December',
      },
      {
        contents: [
          {
            title: 'OnPoint was awarded "Best Lazada Partner""',
            description: `OnPoint received the Technode ORIGIN Innovation Awards in the e-commerce category.The award recognizes outstanding startups, corporate innovators, and movers and shakers in the Asia Pacific region poised for growth.`
          },
        ],
        month: 'November',
      }
    ]
  },
  {
    year: '2020',
    list: [
      {
        contents: [
          {
            title: 'OnPoint was named in the top SME100 list of Fast Moving Companies in Vietnam',
            description: `On the 4-year anniversary of OnPoint foundation, the company was honored to receive an award given by SME Magazine, a leading business magazine in Asia. The SME100 International Award is Asia's leading award based on the criteria of growth and operational capabilities.`
          },
        ],
        month: 'December',
      },
      {
        contents: [
          {
            title: 'OnPoint announced the successful completion of its Series A fundraising round',
            description: `Thanks to the trust from our investors Kiwoom Investment and Daiwa-SSIAM Vietnam Growth Fund II L.P, OnPoint would have additional resources to invest in strategic technology developments, attract new talents, and develop data-driven capabilities to provide our clients with better services.`
          },
        ],
        month: 'April',
      }
    ]
  },
]

export default function OurHistory() {
  const boxItem = (item2, key) => {
    return (
      <div className="szznqfqcxb">
        {key % 2 === 0 ? <img src={arrowLeft} alt="" className="YtjyEROGqS" /> : null}
        {key % 2 !== 0 ? <img src={arrowRight} alt="" className="CcfCKatidT" /> : null}
        {
          item2.contents.map((item3, key3) => {
            return (
              <div className="unwgbpaqpy">
                <div className="wxlkywpaxq">
                  <div className="zgebrbmmmq">OnPoint was awarded "Technode ORIGIN Award"</div>
                  <div className="alzucrlbrf">OnPoint received the Technode ORIGIN Innovation Awards in the e-commerce category.The award recognizes outstanding startups, corporate innovators, and movers and shakers in the Asia Pacific region poised for growth.</div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
  return (
    <>
      <div className="aaywqvghgq">
        <ContainerMain>
          <div className="qowcunzvdd">
            <div className="fisjzokarx">Our History</div>
            <div className="ukprlbrdsa">
              {
                list.map((item) => {
                  return (
                    <div className="enntwpngoo">
                      <div className="ymtimohges">{item.year}</div>
                      {
                        item.list.map((item2, key) => {
                          return <div className="imxyongbfw">
                            <div className="wicbigxykt">
                              {key % 2 !== 0 ? boxItem(item2, key) : null}
                            </div>
                            <div className="otgjiykfho">
                              <div className="hpfiyhlmuz"></div>
                              <div className="esjwsufygh">
                                {key % 2 !== 0 ? <div className="xsabzeivxe gvmybiarut"><div className="rawccjbxej"></div>{item2.month}</div> : null}
                                {key % 2 === 0 ? <div className="kybwdzbrau gvmybiarut">{item2.month}<div className="rawccjbxej"></div></div> : null}
                              </div>
                            </div>
                            <div className="qsrkbcmykv">
                              {key % 2 === 0 ? boxItem(item2, key) : null}
                            </div>
                          </div>
                        })
                      }

                    </div>
                  )
                })
              }
            </div>
          </div>
        </ContainerMain>
      </div>
    </>
  )
}
import ContainerMain from "pages/common/ContainerMain"

import image1 from 'images/Product/Integrated/image-1.png'
import ic1 from 'images/Product/Integrated/ic-1.png'
import ic2 from 'images/Product/Integrated/ic-2.png'
import ic3 from 'images/Product/Integrated/ic-3.png'
import ic4 from 'images/Product/Integrated/ic-4.png'
import ic5 from 'images/Product/Integrated/ic-5.png'
import ic6 from 'images/Product/Integrated/ic-6.png'
import ic7 from 'images/Product/Integrated/ic-7.png'
import ic8 from 'images/Product/Integrated/ic-8.png'
import ic9 from 'images/Product/Integrated/ic-9.png'
import ic10 from 'images/Product/Integrated/ic-10.png'

import './Deliver.scss'

const contents1 = [
  {
    title: 'Real-Time Order Tracking',
    description: 'View, track and process your orders and stay up-to-date at all times',
    icon: ic1,
  },
  {
    title: 'Bulk Order Printing',
    description: 'Automatically organizes orders by similarity and prioritizes orders with low SLAs',
    icon: ic2,
  },
  {
    title: 'Real-Time Synchronization',
    description: 'Stock is synchronized to all sales channels quickly and accurately',
    icon: ic3,
  },
  {
    title: 'Scan to Access',
    description: 'OctoPOS supports barcode scanning to quickly access product information',
    icon: ic4,
  },
  {
    title: 'Multi stockpoints with geo routing',
    description: 'Our algorithm will select the stockpoint that’s closest to shopper’s destination',
    icon: ic5,
  },
]

const contents2 = [
  {
    title: 'SLA Auto-Prioritization',
    description: 'Auto-prioritizes processing orders with shorter SLAs to ensure “Ship-On-Time”',
    icon: ic6,
  },
  {
    title: 'Auto Manage Shipping Labels',
    description: 'Manage shipping labels in one place. No need to login to separate Seller Centers',
    icon: ic7,
  },
  {
    title: 'Low Stock Alert System',
    description: 'OctoPOS will predict if stock will run low based on sales history and alert you ahead of time',
    icon: ic8,
  },
  {
    title: 'Multi-sales channels',
    description: 'Synchronize orders from different eCommerce platforms (Lazada, Shopee, Tiki, Sendo,…) into one application',
    icon: ic9,
  },
  {
    title: 'Real-Time Report & BI',
    description: 'Easy-to-understand and actionable snapshots of key performance metrics to help you focus on what matters to your operations and stock plans ',
    icon: ic10,
  },
]


export default function Deliver() {
  return (
    <>
      <div className="hjjwtlvigw">
        <ContainerMain>
          <div className="txszrulamf">
            <div className="kuixqwbvwz">What We Deliver</div>
            <div className="wtrorqvjqq">
              <div className="qcrqunblqy">
                {
                  contents1.map((item, key) => {
                    return (
                      <div className="iyjsbvljrv" key={key}>
                        <div className="irekgaiutj"><img src={item.icon} className="vmrikdiiwe" alt="" /></div>
                        <div className="feonoypzfk">
                          <div className="nwwwyopygt">{item.title}</div>
                          <div className="kvrcetuodm">{item.description}</div>
                        </div>
                      </div>
                    )
                  })
                }

              </div>
              <div className="bhfderjjqb">
                <img src={image1} alt="" className="pkisauhgre" />
              </div>
              <div className="vxlnrhopnx">
                {
                  contents2.map((item, key) => {
                    return (
                      <div className="iyjsbvljrv" key={key}>
                        <div className="irekgaiutj"><img src={item.icon} className="vmrikdiiwe" alt="" /></div>
                        <div className="feonoypzfk">
                          <div className="nwwwyopygt">{item.title}</div>
                          <div className="kvrcetuodm">{item.description}</div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>

        </ContainerMain>
      </div>
    </>
  )
}
import ContainerMain from "pages/common/ContainerMain"

import icon1 from 'images/Channels/Marketplace/icon-1.png' 
import image1 from 'images/Channels/Marketplace/image-1.png' 
import new1 from 'images/Channels/Marketplace/new-1.png' 
import new2 from 'images/Channels/Marketplace/new-2.png' 
import new3 from 'images/Channels/Marketplace/new-3.png' 
import new4 from 'images/Channels/Marketplace/new-4.png' 

import './SiderNew.scss'

export default function SiderNew() {
  return (
    <>
      <div className="kcnwublglj">
        <ContainerMain>
          <div className="vytblxrlvi">
            <div className="eztyqrklok"><img src={icon1} alt="" className="qunzwtnhcl" /></div>
            <div className="petlajucug">We are the only e-commerce enabler in Vietnam achieved 
the highest ranking from Lazada & Shopee</div>
            <div className="wplkldfiqp"><img src={image1} alt="" className="ztbuubsrnv" /></div>
            <div className="pvzghaygvk">
              <div className="xrnlsodhaw"><img src={new1} alt="" className="shelybgzja" /></div>
              <div className="xrnlsodhaw"><img src={new2} alt="" className="shelybgzja" /></div>
              <div className="xrnlsodhaw"><img src={new3} alt="" className="shelybgzja" /></div>
              <div className="xrnlsodhaw"><img src={new4} alt="" className="shelybgzja" /></div>
            </div>
          </div>
        </ContainerMain>
      </div>
    </>
  )
}
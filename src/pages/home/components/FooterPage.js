import ContainerMain from "pages/common/ContainerMain";
import logo from '../../../assets/images/FooterPage/logo.png'
import icon1 from '../../../assets/images/FooterPage/icon-1.png'
import icon2 from '../../../assets/images/FooterPage/icon-2.png'
import icon3 from '../../../assets/images/FooterPage/icon-3.png'
import icon4 from '../../../assets/images/FooterPage/icon-4.png'
import './FooterPage.scss'

export default function FooterPage() {
  return (
    <>
      <div className="jcgnCeVorZ">
        <ContainerMain>
          <div className="SbnPNCEOwC">
            <div className="NarqnYBhzg">
              <div className="qmAiBSoPaS"><img alt="" className="FxcyepeBKq" src={logo} /></div>
              <div className="arObSJBKCc">27B Nguyen Dinh Chieu St., Da Kao Ward, District 1, HCMC</div>
              <div className="arObSJBKCc"><img alt="" className="GPnrnrSPxQ" src={icon1} /> (+84) 028 7305 6686</div>
              <div className="arObSJBKCc"><img alt="" className="GPnrnrSPxQ" src={icon2} /> contact@onpoint.vn</div>
            </div>
            <div className="NarqnYBhzg">
              <div className="arneZmwYLE">Our Products</div>
              <div className="NaAGewMQjG">E-commerce Store Management </div>
              <div className="NaAGewMQjG">Online-Offline Integrated Order Management </div>
              <div className="NaAGewMQjG">AI/Machine Learning Marketing Campaign Management </div>
              <div className="NaAGewMQjG">Performance Dashboard </div>
            </div>
            <div className="NarqnYBhzg">
              <div className="arneZmwYLE">Our Services</div>
              <div className="NaAGewMQjG">E-marketing Management </div>
              <div className="NaAGewMQjG">E-store Management </div>
              <div className="NaAGewMQjG">Shopper Engagement </div>
              <div className="NaAGewMQjG">Omni-channel Logistics & Fulfilment </div>
            </div>
            <div className="NarqnYBhzg">
              <div className="arneZmwYLE">Useful Links</div>
              <div className="NaAGewMQjG">Privacy Policy </div>
              <div className="NaAGewMQjG">Terms of Service </div>
              <div className="FFHyFJuvUO">
                <div className="aqmosvhaDe"><img alt="" className="StNtFzDeox" src={icon3} /></div>
                <div className="aqmosvhaDe"><img alt="" className="StNtFzDeox" src={icon4} /></div>
              </div>
            </div>
          </div>
        </ContainerMain>
      </div>
    </>
  )
}
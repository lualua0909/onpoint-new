import ContainerMain from "src/pages/common/ContainerMain"
import logo from "images/FooterPage/logo.png"
import icon1 from "images/FooterPage/icon-1.png"
import icon2 from "images/FooterPage/icon-2.png"
import "./FooterPage.scss"

export default function FooterPage() {
  return (
    <>
      <div className="jcgnCeVorZ">
        <ContainerMain>
          <div className="SbnPNCEOwC">
            <div className="NarqnYBhzg">
              <div className="qmAiBSoPaS">
                <img alt="" className="FxcyepeBKq" src={logo} />
              </div>
              <div className="arObSJBKCc">
                27B Nguyen Dinh Chieu St., Da Kao Ward, District 1, HCMC
              </div>
              <div className="arObSJBKCc">
                <img alt="" className="GPnrnrSPxQ" src={icon1} />
                <a href="tel:+842873056686">(+84) 028 73056686</a>
              </div>
              <div className="arObSJBKCc">
                <img alt="" className="GPnrnrSPxQ" src={icon2} />{" "}
                <a href="mailto:contact@onpoint.vn">contact@onpoint.vn</a>
              </div>
            </div>
            <div className="NarqnYBhzg">
              <div className="arneZmwYLE">Our Products</div>
              <div className="NaAGewMQjG">E-commerce Store Management </div>
              <div className="NaAGewMQjG">
                Online-Offline Integrated Order Management{" "}
              </div>
              <div className="NaAGewMQjG">
                AI/Machine Learning Marketing Campaign Management{" "}
              </div>
              <div className="NaAGewMQjG">Performance Dashboard </div>
            </div>
            <div className="NarqnYBhzg">
              <div className="arneZmwYLE">Our Services</div>
              <div className="NaAGewMQjG">E-marketing Management </div>
              <div className="NaAGewMQjG">E-store Management </div>
              <div className="NaAGewMQjG">Shopper Engagement </div>
              <div className="NaAGewMQjG">
                Omni-channel Logistics & Fulfilment{" "}
              </div>
            </div>
            <div className="NarqnYBhzg">
              <div className="arneZmwYLE">Useful Links</div>
              <div className="NaAGewMQjG">Privacy Policy </div>
              <div className="NaAGewMQjG">Terms of Service </div>
              <div className="FFHyFJuvUO">
                <div className="aqmosvhaDe">
                  <a
                    className="StNtFzDeox"
                    href="https://www.facebook.com/OnpointVietnam"
                  >
                    <div className="circle">
                      <span className="icon fa-brands fa-facebook-f"></span>
                    </div>
                  </a>
                </div>
                <div className="aqmosvhaDe">
                  <a
                    className="StNtFzDeox"
                    href="https://www.linkedin.com/company/onpointvn/"
                  >
                    <div className="circle">
                      <span className="icon fa-brands fa-linkedin-in"></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ContainerMain>
      </div>
      <div className="zpVHgooayN">OnPoint © 2022. All Rights Reserved.</div>
    </>
  )
}

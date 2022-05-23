import ContainerMain from "src/pages/common/ContainerMain"
import icon2 from "images/Product/Campaign/icon-2.png"
import icon3 from "images/Product/Campaign/icon-3.png"

import "./Recommentdation.scss"

export default function Recommentdation() {
  return (
    <>
      <div className="xaslCohnoT">
        <ContainerMain>
          <div className="rDRfHCHxXJ">
            <div className="wTSlispjcx">
              Personalised Recommendation – AI/ML Data-Driven Approach
            </div>
            <div className="rBAxnbCWtS">
              <div className="juLRYOAlGI">
                <div className="tvMeQUBDED">
                  <img src={icon2} alt="" className="hjTuooQiES" />
                </div>
                <div className="kicAKpkeXW">
                  <div className="ZMJCDFusSQ">
                    A. Next-Best-Offer Recommendation
                  </div>
                  <div className="sCSeiCAAJW">
                    How do you drive revenue by recommending the most relevant
                    products for the customer's next purchase?
                  </div>
                </div>
              </div>
              <div className="juLRYOAlGI">
                <div className="tvMeQUBDED">
                  <img src={icon3} alt="" className="hjTuooQiES" />
                </div>
                <div className="kicAKpkeXW">
                  <div className="ZMJCDFusSQ">
                    B. Product Suitability Recommendation
                  </div>
                  <div className="sCSeiCAAJW">
                    How do you grow the revenue of certain products by reaching
                    customers with the highest propensity to purchase them?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerMain>
      </div>
    </>
  )
}

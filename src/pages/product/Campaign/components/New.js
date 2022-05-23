import ContainerMain from "src/pages/common/ContainerMain"

import new1 from "images/Product/Campaign/new-1.png"
import new2 from "images/Product/Campaign/new-2.png"
import new3 from "images/Product/Campaign/new-3.png"

import "./New.scss"

export default function New() {
  return (
    <>
      <div className="muaHKANNrk">
        <div className="iuOmyiOHTj">
          <ContainerMain>
            <div className="fkAbIuQptr">
              <div className="WHhnVXjdkh">{`With our AI-driven shopper segmentation and persona analytics, OnPoint enables
brands to increase sales and enhance brand loyalty, customer engagement and
communication.`}</div>
              <div className="RqSwAGZvZU">
                <div className="aFbRPPhZNG">
                  <div className="ZEntAfMFJe">
                    <img className="HuMwlHqPhh" alt="" src={new1} />
                  </div>
                  <div className="ipNYWGRRcn">
                    Increase marketing efficiency{" "}
                  </div>
                </div>
                <div className="aFbRPPhZNG">
                  <div className="ZEntAfMFJe">
                    <img className="HuMwlHqPhh" alt="" src={new2} />
                  </div>
                  <div className="ipNYWGRRcn">
                    Provide better customer targeting{" "}
                  </div>
                </div>
                <div className="aFbRPPhZNG">
                  <div className="ZEntAfMFJe">
                    <img className="HuMwlHqPhh" alt="" src={new3} />
                  </div>
                  <div className="ipNYWGRRcn">
                    Help brands to find new market opportunities{" "}
                  </div>
                </div>
              </div>
            </div>
          </ContainerMain>
        </div>
      </div>
    </>
  )
}

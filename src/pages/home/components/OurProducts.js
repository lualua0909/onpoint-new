import ContainerMain from "src/pages/common/ContainerMain"
import image1 from "images/Home/OurProducts/image-1.png"
import image2 from "images/Home/OurProducts/image-2.png"
import image3 from "images/Home/OurProducts/image-3.png"
import image4 from "images/Home/OurProducts/image-4.png"
import "./OurProducts.scss"

export default function OurProducts() {
  return (
    <>
      <div className="dXmSTTLHQi">
        <ContainerMain>
          <div className="mCjLcmpFPk">
            <div className="HyDfhggjXe">
              <div className="QfDoodNPUg">
                <div className="rJbDXuhMZw">Our Products</div>
                <div className="dmOJXeLHPg">
                  <div className="kOKKLQkCvz">
                    <img alt="" className="hyCIrFTAOq hover01" src={image1} />
                  </div>
                  <div className="qOriJZDUwq">
                    Online-Offline Integrated Order Management
                  </div>
                  <div className="NyAqjhiELb">Learn more</div>
                </div>
                <div className="dmOJXeLHPg">
                  <div className="kOKKLQkCvz">
                    <img alt="" className="hyCIrFTAOq hover01" src={image3} />
                  </div>
                  <div className="qOriJZDUwq">Performance Dashboard</div>
                  <div className="NyAqjhiELb">Learn more</div>
                </div>
              </div>
              <div className="LOKkhgrzEe">
                <div className="dmOJXeLHPg">
                  <div className="kOKKLQkCvz">
                    <img alt="" className="hyCIrFTAOq hover01" src={image2} />
                  </div>
                  <div className="qOriJZDUwq">E-commerce Store Management </div>
                  <div className="NyAqjhiELb">Learn more</div>
                </div>
                <div className="dmOJXeLHPg">
                  <div className="kOKKLQkCvz">
                    <img alt="" className="hyCIrFTAOq hover01" src={image4} />
                  </div>
                  <div className="qOriJZDUwq">
                    AI/Machine Learning Marketing Campaign Management
                  </div>
                  <div className="NyAqjhiELb">Learn more</div>
                </div>
              </div>
            </div>
          </div>
        </ContainerMain>
      </div>
    </>
  )
}

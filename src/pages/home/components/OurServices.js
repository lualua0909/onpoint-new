import ContainerMain from "src/pages/common/ContainerMain"
import image1 from "images/Home/OurServices/image-1.png"
import image2 from "images/Home/OurServices/image-2.png"
import image3 from "images/Home/OurServices/image-3.png"
import image4 from "images/Home/OurServices/image-4.png"
import "./OurServices.scss"

export default function OurServices() {
  return (
    <>
      <div className="fSTLvrgvKt">
        <ContainerMain>
          <div className="BlpEJrISXN">
            <div className="LHchJgDqrk">Our Services</div>
            <div className="NPWcBHPdBy">
              <div className="XMVnTTiQVt">
                <div className="MljFutRpYK">
                  <img
                    alt="image1"
                    className="GvMWIYQXCn hover01"
                    src={image1}
                  />
                </div>
                <div className="BzTTmqDpqY">E-marketing Management</div>
                <div className="kyTTgOGgnS">Learn more</div>
              </div>
              <div className="XMVnTTiQVt">
                <div className="MljFutRpYK">
                  <img
                    alt="image2"
                    className="GvMWIYQXCn hover01"
                    src={image2}
                  />
                </div>
                <div className="BzTTmqDpqY">E-store Management</div>
                <div className="kyTTgOGgnS">Learn more</div>
              </div>
              <div className="XMVnTTiQVt">
                <div className="MljFutRpYK">
                  <img
                    alt="image3"
                    className="GvMWIYQXCn hover01"
                    src={image3}
                  />
                </div>
                <div className="BzTTmqDpqY">Shopper Engagement</div>
                <div className="kyTTgOGgnS">Learn more</div>
              </div>
              <div className="XMVnTTiQVt">
                <div className="MljFutRpYK ">
                  <img
                    alt="image4"
                    className="GvMWIYQXCn hover01"
                    src={image4}
                  />
                </div>
                <div className="BzTTmqDpqY">
                  Omni-channel Logistics & Fulfilment
                </div>
                <div className="kyTTgOGgnS">Learn more</div>
              </div>
            </div>
          </div>
        </ContainerMain>
      </div>
    </>
  )
}

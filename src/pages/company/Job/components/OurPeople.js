import ContainerMain from "pages/common/ContainerMain"

import user1 from "images/Company/Job/user-1.png"
import user2 from "images/Company/Job/user-2.png"

import './OurPeople.scss'

export default function OurPeople() {
  return (
    <>
      <div className="xjYpCNKKDX">
        <ContainerMain>
          <div className="sDIJBqbWSL">
            <div className="sZESHENPLM">Our People</div>
            <div className="NVhUBVtJhj">
              <div className="PZFZcdcvaM">
                <div className="XKfIMRDKbV">
                  <div className="nnnVFCdbQT">Tran Vu Quang</div>
                  <div className="YBDxvtbFRJ">Founder & CEO</div>
                  <div className="TLapyAfins">We aim to provide the most advanced eco-system and service to support e-commerce and interconnect brands, partners and consumers.  We believe that our talents are the engine for our own success story and greatly emphasize this in our daily working culture. We invest and nurture our talents through comprehensive training, adventurous projects and provide a plethora of opportunities for learning and personal growth. We cultivate an entrepreneurial and ambitious work environment, collaborative work relationships, engaging projects, best-in-class learning and development for e-commerce and provide you with mentorship that allow you to advance critical skills further. OnPoint enables you to unlock your own potential and be the best version of yourself!</div>
                </div>
                <div className="fAmDJQzgFA">
                  <div className="ATEITTbZne"><img alt="" src={user1} className="XsydVPXjFQ" /></div>
                </div>
              </div>
              <div className="PZFZcdcvaM">
                <div className="fAmDJQzgFA">
                  <div className="ATEITTbZne"><img alt="" src={user2} className="XsydVPXjFQ" /></div>
                </div>
                <div className="XKfIMRDKbV">
                  <div className="nnnVFCdbQT">Nguyen Huy Hoang</div>
                  <div className="YBDxvtbFRJ">Chief Business Officer</div>
                  <div className="TLapyAfins">At OnPoint, we believe that our people quality is the key success factor of our company in the market. We continuously invest in training and developing our people to become leading professionals in their fields. By doing that, we ensure the clients receive the best quality from our services and products.</div>
                </div>
              </div>
            </div>
          </div>
        </ContainerMain>
      </div>
    </>
  )
}
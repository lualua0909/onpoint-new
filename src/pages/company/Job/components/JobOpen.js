import ContainerMain from "pages/common/ContainerMain"

import icon1 from "images/Company/Job/icon-1.png"
import icon2 from "images/Company/Job/icon-2.png"

import './JobOpen.scss'

export default function JobOpen() {
  return (
    <>
      <div className="bLUDMBifTq">
        <ContainerMain>
          <div className="qbVquDborH">
            <div className="QAajbgYvge">Join us in creating impact that matters. Shape the future and start
              your growth journey with us!</div>
            <div className="WylqrNBIaU">Jobs opening</div>
            <div className="EmyHwIHVOc">
              <div className="QGYMotEjOK yMUuBnuyrz">Tech</div>
              <div className="QGYMotEjOK">Non-tech</div>
            </div>
            <div className="RDmpkVhYgZ">
              {
                [0, 1, 2, 3].map((item) => {
                  return (
                    <div className="OUNLWCOaTA">
                      <div className="guTplusTYG">
                        <div className="pkXzdQXCBn">Brand Manager</div>
                        <div className="KdKFAxfitq">
                          <div className="gcmVHrKeGL"><img src={icon1} alt="" className="usQCVBoXFX" />Manager</div>
                          <div className="bESzqAtCrp"><img src={icon2} alt="" className="RNSJRozhIT" />22/02/2022</div>
                        </div>
                      </div>
                      <div className="KPLKrTWNCZ">
                        <div className="iANdTPZbgi">View</div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="JxaNVDmdhb">See More</div>
          </div>
        </ContainerMain>
      </div>
    </>
  )
}
import ContainerMain from "pages/common/ContainerMain"

import new1 from "images/Company/Job/new-1.png"
import new2 from "images/Company/Job/new-2.png"
import new3 from "images/Company/Job/new-3.png"
import new4 from "images/Company/Job/new-4.png"

import './OurOffice.scss'

export default function OurOffice() {
  return (
    <>
      <div className="enuDjfLFVp">
        <ContainerMain>
          <div className="cjkXwabZMr">
            <div className="SlkowocPvz">Our Office</div>
            <div className="NKmOikBgUS">
              <div className="YGiKFCKWDR"><img src={new1} alt="" className="aWqgmbtpZp" /></div>
              <div className="YGiKFCKWDR"><img src={new2} alt="" className="aWqgmbtpZp" /></div>
              <div className="YGiKFCKWDR"><img src={new3} alt="" className="aWqgmbtpZp" /></div>
              <div className="YGiKFCKWDR"><img src={new4} alt="" className="aWqgmbtpZp" /></div>
            </div>
          </div>
        </ContainerMain>
      </div>
      <div className="RLMaTvsPsY">
        <ContainerMain>
          <div className="rKMDjoKIWw">
            <div className="kHUWFSKSSS">Company Introduction</div>
            <video controls className="UWuBEtWkLF">
              <source src="movie.mp4" type="video/mp4" />
            </video>
          </div>
        </ContainerMain>
      </div>
    </>
  )
}
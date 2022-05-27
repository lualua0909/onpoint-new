import icon4 from "images/Company/DetailMedia/icon-4.png"

import './Comment.scss'

export default function Comment() {
  return (
    <>
      <div className="eLNwDTmejY">
        <div className="VOOdtIUOlA">
          <div className="JYsfpPrdoO">Thieu Tran</div>
          <div className="TobkTyGnQY">04/06/2020 13:16</div>
          <div className="SZlXPQtrOr">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </div>
        </div>
        <div className="BtsDrhEzyI">
          <div className="deyqyvXGda"><img alt='' className='UEHjlDcXZK' src={icon4} /></div>
          <div className="laXkNamUfI">5</div>
          <div className="EgNlwFpLkY">Reply</div>
        </div>
        <div className="MnHGayYDRs">
          <div className="hTGYxrRNVA">
            <div className="BXxCdJkZuC">4 comments</div>
            <div className="VcKUkbyJby"><input className="zhwZjRJsES" /></div>
          </div>
          <div className="imGlZbQTfJ">
            {
              [0, 1, 2].map((item) => {
                return (
                  <div className="QErpGFrACA">
                    <div className="carCupTZDJ">Nghị Nguyễn</div>
                    <div className="GOjtlDjwJv">04/06/2020 13:16</div>
                    <div className="feyaDKZCqK">Lorem Ipsum is simply...</div>
                    <div className="HpbbSzsUOC"><img alt="" src={icon4} className="kUVGMdovkG" /></div>
                  </div>
                )
              })
            }
          </div>
          <div className="bBwrXjDyJu">Load more</div>
        </div>
      </div>
    </>
  )
}
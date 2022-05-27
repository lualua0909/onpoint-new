import ContainerMain from "pages/common/ContainerMain"

import './PressCoverage.scss'

export default function PressCoverage() {
  return (
    <>
      <div className="JYiBaDYpiZ">
        <ContainerMain>
          <div className="DJzBHRjwoI">
            <div className="PIHgIJZBjp">Press Coverage</div>
            <div className="ZKBQRQUPKn">OnPoint is covered by many major media, as you can see below.</div>
            <div className="sUvsIGbbIS">
              {
                [0, 1, 2].map((item) => {
                  return (
                    <div className="JwsiuEWwAN">
                      <div className="pfAFOmkfnU"><img src="" className="WLRXAXBbZq" alt="" /></div>
                      <div className="kLqJDKHdDb">
                        <div className="jAzzvNYioD">Media</div>
                        <div className="jllkJRbyIo">18:00 22/2/2022</div>
                      </div>
                      <div className="sdtolcTiOf">Former Lazada execs’ OnPoint snaps up $8m to double down...</div>
                      <div className="TtlrDDXRCM">Vietnamese ecommerce enabler OnPoint has raised over US$8 million in series A funding led by South Korea’s Kiwoom Investment and Daiwa-SSIAM Vietnam Growth Fund...</div>
                      <div className="AzBzkzwHlB">Read more</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </ContainerMain>
      </div>
    </>
  )
}
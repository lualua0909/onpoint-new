import ContainerMain from "src/pages/common/ContainerMain"
import image1 from "images/Home/WhatWeDo/image-1.png"
import "./WhatWeDo.scss"

export default function WhatWeDo({ contents = [] }) {
  return (
    <>
      <div className="veojzQjoSI">
        <div className="cXjKWozutF">
          <div className="rxsdilmsao">
            <div className="KbFTqrRWSD">
              <img alt="" className="uWXNYLrCyZ" src={image1} />
            </div>
            <ContainerMain>
              <div className="iNzXenhHCj">
                <div className="kQFHTLqPss">
                  <div className="YYQohNmAHv">What We Do</div>
                  <div className="fcCHdHMrJE">
                    {contents.map(content => {
                      return (
                        <div className="StjvRqrbev" key={content.id}>
                          <div className="NIIdwOtIXI">
                            <div className="IydGkLszEC">{content.title}</div>
                            <div className="aQkWOzxVNg">{content.content}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </ContainerMain>
          </div>
        </div>
      </div>
    </>
  )
}

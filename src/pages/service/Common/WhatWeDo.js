import ContainerMain from "src/pages/common/ContainerMain"
import image1 from "images/Home/WhatWeDo/image-1.png"
import "./WhatWeDo.scss"

export default function WhatWeDo({ contents = [], title = "" }) {
  return (
    <>
      <div className="vomkmxgmzl">
        <div className="ouareurroh">
          <div className="lqayiefvli">
            <div className="vvxyunefzb">
              <img alt="" className="eoebufdlfc" src={image1} />
            </div>
            <ContainerMain>
              <div className="yidrekwmdn stexaylkzv">
                <div className="ngrhmuojmf">
                  <div className="honkclljax">{title}</div>
                  <div className="awbfhmagbq">
                    {contents.map(content => {
                      return (
                        <div className="rhrdngavpc" key={content.id}>
                          <div className="sispasfymu">
                            <div className="nhiubexoqf">{content.title}</div>
                            <div className="lziwdkixgs">{content.content}</div>
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

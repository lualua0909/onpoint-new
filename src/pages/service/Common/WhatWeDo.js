import ContainerMain from "src/pages/common/ContainerMain"
import "./WhatWeDo.scss"

export default function WhatWeDo({ contents = [], title = "", image = '' }) {
  return (
    <>
      <div className="vomkmxgmzl">
        <div className="ouareurroh">
          <div className="lqayiefvli">
            <div className="vvxyunefzb">
              <img alt="" className="eoebufdlfc" src={image} />
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

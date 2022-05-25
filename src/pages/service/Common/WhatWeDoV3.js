import ContainerMain from "src/pages/common/ContainerMain"
import "./WhatWeDo.scss"

export default function WhatWeDoV3({ contents = [], title = "", image = '', titleHeader = '', descriptionHeader = '', paddingTitleTop = 0 }) {
  return (
    <>
      <div className="vomkmxgmzl">
        <div className="ouareurroh">
          <div className="pxiledsbwb" style={{ paddingTop: paddingTitleTop }}>
            <div className="yvrkhtigjd">{titleHeader}</div>
            <div className="wzvrqwyocu">{descriptionHeader}</div>
          </div>
          <div className="lqayiefvli">
            <div className="vvxyunefzb">
              <img alt="" className="eoebufdlfc" src={image} />
            </div>
            <ContainerMain>
              <div className="yidrekwmdn stexaylkzv">
                <div className="ngrhmuojmf">
                  <div className="uwpdwksmfu">{title}</div>
                  <div className="awbfhmagbq">
                    {contents.map(content => {
                      return (
                        <div className="rhrdngavpc" key={content.id}>
                          <div className="wrrqjxhygj">
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

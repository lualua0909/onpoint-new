import ContainerMain from "src/pages/common/ContainerMain"
import "./WhatWeDoV2.scss"

export default function WhatWeDo({ contents = [], image = '', title = '', description = '' }) {
  return (
    <>
      <div className="wmwfrxhexu">
        <div className="pxiledsbwb">
          <div className="yvrkhtigjd">Campaign & Merchandise Management		</div>
          <div className="wzvrqwyocu">Our team ensures onsite visibilities for your e-commerce campaigns to achieve your targets for traffic and conversion rate.			</div>
        </div>
        <div className="uqajkgndxj">
          <div className="bjtvjkgcai">
            <div className="xifvmztqmd">
              <img alt="" className="oejkicvxfh" src={image} />
            </div>
            <ContainerMain>
              <div className="udbnrebllg">
                <div className="aqalpfffcm">
                  {contents.map(content => {
                    return (
                      <div className="pcxsqgpfpk" key={content.id}>
                        <div className="xvlobbatbf">
                          <div className="ixucicuvbe">{content.title}</div>
                          <div className="qkyrzxwfqt">{content.content}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </ContainerMain>
          </div>
        </div>
      </div>
    </>
  )
}

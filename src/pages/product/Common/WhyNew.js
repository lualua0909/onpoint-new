import ContainerMain from "src/pages/common/ContainerMain"
import "./WhyNew.scss"

export default function WhyNew({ list, title, description }) {
  return (
    <>
      <div className="snElGSLNmQ">
        <ContainerMain>
          <div className="NnSxBIsuoI">
            <div className="MMfVvhsLVK">{title}</div>
            <div className="hctcwvbzis">{description}</div>
            <div className="XTExbngyLb">
              {list
                ? list.map((item, key) => {
                    return (
                      <div className="VaquxsnUKk" key={key}>
                        <div className="vQcAdXDytg">
                          <img
                            src={item?.image}
                            className="qJNLDAUfGI"
                            alt=""
                          />
                        </div>
                        <div className="JsYXPtPyeG">{item?.title}</div>
                        <div className="EBINZolfnD">{item?.description}</div>
                      </div>
                    )
                  })
                : null}
            </div>
          </div>
        </ContainerMain>
      </div>
    </>
  )
}

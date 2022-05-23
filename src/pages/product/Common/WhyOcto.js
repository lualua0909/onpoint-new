import ContainerMain from "src/pages/common/ContainerMain"
import "./WhyOcto.scss"

export default function WhyOcto({ list }) {
  return (
    <>
      <div className="NSBVgsiILr">
        <ContainerMain>
          <div className="KizWpWHnNn">
            <div className="mUIjNuGqBU">Why OctoSells?</div>
            <div className="WpBqTKomku">
              {list
                ? list.map((item, key) => {
                    return (
                      <div className="kzsRZGbSsj" key={key}>
                        <div className="jNAByrdmhI">
                          <img
                            alt=""
                            className="LlmQKyZrhD"
                            src={item?.image}
                          />
                        </div>
                        <div className="ezccLxmJOK">{item?.title}</div>
                        <div className="hpTbGUgSMG">{item.description}</div>
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

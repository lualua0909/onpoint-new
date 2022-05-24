import "./BannerHeader.scss"
import ContainerMain from "src/pages/common/ContainerMain"

export default function BannerHeader({
  breadcum = '',
  banner,
  logo,
  listTitle = [],
  description,
}) {
  return (
    <div className="RNDniyVkqZ" style={{ backgroundImage: `url(${banner})` }}>
      <div className="vinzgxtase">
        <ContainerMain>
          <div className="lhdxmwizjl">{breadcum}</div>
        </ContainerMain>
      </div>
      <div className="zbliJAztBb">
        {logo ? (
          <div className="wmPLOxTAul">
            <img alt="" className="UKIJmWuMCN" src={logo} />
          </div>
        ) : null}
        <div className="tbwjbtHNhe">
          {listTitle?.map((item, index) => {
            return (
              <div key={index} className="MdsIbDKLPI">
                {item}
              </div>
            )
          })}
        </div>
        <div className="jzjTyOOeZU">{description}</div>
      </div>
    </div>
  )
}

import './LogoFooterV2.scss'
import ContainerMain from "src/pages/common/ContainerMain"

export default function LogoFooterV2({ title = '', description = '', list = [], hottitle = '' }) {
  return (
    <>
      <div className="YTbclMrQcX">
        <ContainerMain>
          <div className="ZtUJeUZMKt">
            {title ? <div className="fhfYuTrhQF">{title}</div> : null}
            {description ? <div className="NernbOhzIV">{description}</div> : null}
            {hottitle ? <div className="YRMoorarcl">{hottitle}</div> : null}
            <div className='inMWOZxcCA'>
              {
                list.map((item, key) => {
                  return (
                    <div className="iUJQffMJCp" key={key}><img className="enHYIdeoLh" alt="" src={item} /></div>
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
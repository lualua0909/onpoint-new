import './LogoFooter.scss'
import ContainerMain from "src/pages/common/ContainerMain"

export default function LogoFooter({ title = '', description = '', list = [], hottitle = '' }) {
  return (
    <>
      <div className="oadmphxcyr">
        <ContainerMain>
          <div className="szglgsqtmn">
            <div className="aywnltlnel">{title}</div>
            <div className="fzyeazpgof">{description}</div>
            {hottitle ? <div className="IAcNKwAYlK">{hottitle}</div> : null}
            <div className='whoimnzqka'>
              {
                list.map((item, key) => {
                  return (
                    <div className="otnfshfvgo" key={key}><img className="jundnizqtq" alt="" src={item} /></div>
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
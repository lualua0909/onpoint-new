import './NewRow.scss'
import ContainerMain from "src/pages/common/ContainerMain"

export default function NewRow({ image, title, more, description, position = 'left', paddingText }) {
  return (
    <>
      <div className='qaawmpstdv'>
        <ContainerMain>
          <div className='oflhydofzh'>
            {position === 'left' ? <div className='vnlquwrayu'><img src={image} alt="" className='udncvqnrno' /></div> : null}
            <div className='cfrrviuodn' style={{ padding: paddingText }}>
              <div className='frrtcscsui'>{title}</div>
              <div className='khhzvvyzvx'>{more}</div>
              <div className='encrxneqoq'>{description}</div>
            </div>
            {position === 'right' ? <div className='vnlquwrayu'><img src={image} alt="" className='udncvqnrno' /></div> : null}
          </div>
        </ContainerMain>
      </div>
    </>
  )
}
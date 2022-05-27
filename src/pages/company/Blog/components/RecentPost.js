import './RecentPost.scss'

const dataNews2 = [
  {
    title: 'EXPERIENCING A NEW SHOPPING APPROACH WITH THE NEXT GENERATION OF SHOPPERS',
    date: 'July 15, 2021',
    created_by: 'by Sheji Ho'
  },
  {
    title: 'EXPERIENCING A NEW SHOPPING APPROACH WITH THE NEXT GENERATION OF SHOPPERS',
    date: 'July 15, 2021',
    created_by: 'by Sheji Ho'
  },
  {
    title: 'EXPERIENCING A NEW SHOPPING APPROACH WITH THE NEXT GENERATION OF SHOPPERS',
    date: 'July 15, 2021',
    created_by: 'by Sheji Ho'
  },
  {
    title: 'EXPERIENCING A NEW SHOPPING APPROACH WITH THE NEXT GENERATION OF SHOPPERS',
    date: 'July 15, 2021',
    created_by: 'by Sheji Ho'
  },
  {
    title: 'EXPERIENCING A NEW SHOPPING APPROACH WITH THE NEXT GENERATION OF SHOPPERS',
    date: 'July 15, 2021',
    created_by: 'by Sheji Ho'
  },
  {
    title: 'EXPERIENCING A NEW SHOPPING APPROACH WITH THE NEXT GENERATION OF SHOPPERS',
    date: 'July 15, 2021',
    created_by: 'by Sheji Ho'
  },
  {
    title: 'EXPERIENCING A NEW SHOPPING APPROACH WITH THE NEXT GENERATION OF SHOPPERS',
    date: 'July 15, 2021',
    created_by: 'by Sheji Ho'
  },
  {
    title: 'EXPERIENCING A NEW SHOPPING APPROACH WITH THE NEXT GENERATION OF SHOPPERS',
    date: 'July 15, 2021',
    created_by: 'by Sheji Ho'
  }
]

export default function RecentPost() {
  return (
    <>
      <div className="SPhJSjiKjF">
        <div className="JZxPMGRqig">Recent Post</div>
        <div className="mBRglNsUaH">
          {
            dataNews2.map((item) => {
              return (
                <div className="WrVuIYPtRQ">
                  <div className="hsUgKPqtCZ">EXPERIENCING A NEW SHOPPING APPROACH WITH THE NEXT GENERATION OF SHOPPERS</div>
                  <div className="phrrVTvdup"><span className="kksDJxTlfk">July 15, 2021</span>  /  <span className="CENcaaMLOi"></span>by Sheji Ho</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
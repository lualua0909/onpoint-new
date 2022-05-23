import ContainerMain from "src/pages/common/ContainerMain"
import image3 from "images/Home/News/image-3.png"
import image1 from "images/Home/News/image-1.png"
import image2 from "images/Home/News/image-2.png"
import Slider from "react-slick/lib/slider"
import { RightOutlined, LeftOutlined } from "@ant-design/icons"
import "./News.scss"

const news = [
  {
    id: 1,
    image: image3,
    titile: "OnPoint's Tran Vu Quang on how innovations are optimizing...",
    timer: "18:00 22/2/2022",
    description:
      "E-commerce has become a driver of growth in an increasingly digitalized business environment. A report by Facebook and Bain & Co cites that Southeast Asia gai...",
    href: "https://technode.global/2022/01/18/onpoints-tran-vu-quang-on-how-innovations-are-optimizing-e-commerce-operations-and-driving-new-opportunities-for-growth-origin-innovation-awards-qa/",
  },
  {
    id: 2,
    image: image1,
    titile: "Vietnam-base e-commerce enabler OnPoint has raised over $8 m...",
    timer: "18:00 22/2/2022",
    description:
      "Vietnam-base e-commerce enabler OnPoint has raised over $8 million in Series A funding round led by Kiwoom Investment and Daiwa-SSIAM Vietnam Growth Fund II...",
    href: "https://www.dealstreetasia.com/stories/vietnam-onpoint-series-a-185736?fbclid=IwAR2UkMjCg7dEBV5q2d5RwbG75fEjZqFK_9wKmYEzKH8aOKs3qRmjwClFfOA",
  },
  {
    id: 3,
    image: image2,
    titile: "OnPoint bringing expertise in new e-commerce phase",
    timer: "18:00 22/2/2022",
    description:
      "While online shopping has gained increasing traction since the outbreak of the coronavirus pandemic, technical solutions are becoming more essential in order for...",
    href: "https://vir.com.vn/onpoint-bringing-expertise-in-new-e-commerce-phase-76173.html",
  },
  {
    id: 4,
    image: "https://cms.vietnamreport.net/source/opont.JPG",
    titile:
      "OnPoint: Từ start-up thương mại điện tử đến Top 500 công ty tư nhân lớn nhất Việt Nam",
    timer: "18:00 22/2/2022",
    description:
      "Tối 14/01, tại Lễ công bố Top 500 doanh nghiệp lớn nhất Việt Nam năm 2021 do Vietnam Report và Báo VietNamNet tổ chức, OnPoint vinh dự góp mặt trong bảng xếp hạng 500...",
    href: "https://vnr500.com.vn/OnPoint-Tu-startup-thuong-mai-dien-tu-den-Top-500-cong-ty-tu-nhan-lon-nhat-Viet-Nam-10184-1007.html",
  },
]
export default function News() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <div className="WdZHPaJUsL">
        <ContainerMain>
          <div className="svoVqdrGDg">In The News</div>
          <Slider className="bYrVNJdzkW" {...settings} autoplay={true}>
            {news.map(item => {
              return (
                <div className="EePOugTXGX" key={item.id}>
                  <NewsCard data={item} />
                </div>
              )
            })}
          </Slider>
        </ContainerMain>
      </div>
    </>
  )
}

const NewsCard = ({ data }) => {
  return (
    <div className="zGDsKXiVOp">
      <div className="QypwTPNqoS">
        <img alt="" className="SJVEIkshKX" src={data.image} />
      </div>
      <div className="BSxRUWALKW">
        <div className="kQIUVgbbKj">
          <div className="FXIQCzUdUS">Media</div>
        </div>
        <div className="mWlYDoscNs">{data.timer}</div>
      </div>
      <div className="OKZiCgTrQx">{data.titile}</div>
      <div className="IpbDjzWUoq">{data.description}</div>
      <a className="LeEIMdbPao" href={data.href}>
        Read more
      </a>
    </div>
  )
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <RightOutlined
      className={className}
      style={{ ...style, display: "block", color: "#777777", fontSize: 14 }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <LeftOutlined
      className={className}
      style={{ ...style, display: "block", color: "#777777", fontSize: 14 }}
      onClick={onClick}
    />
  )
}

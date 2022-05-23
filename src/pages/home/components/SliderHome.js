import banner1 from "images/Home/Slider/banner-1.png"
import banner2 from "images/Home/Slider/banner-2.png"
import banner3 from "images/Home/Slider/banner-3.png"
import banner4 from "images/Home/Slider/banner-4.png"
import image1 from "images/Home/Slider/image-1.png"
import image2 from "images/Home/Slider/image-2.png"
import image3 from "images/Home/Slider/image-3.png"
import Slider from "react-slick/lib/slider"
import "./SliderHome.scss"
import ContainerMain from "src/pages/common/ContainerMain"
import { RightOutlined, LeftOutlined } from "@ant-design/icons"

const slides = [
  {
    id: 1,
    title1:
      "Your trusted partner with a proven track record and extensive industry experience",
    title2: "AWARD-WINNING E-COMMERCE SERVICE PROVIDER",
    imageFooters: [image1, image2],
    imageBanner: image3,
  },
  {
    id: 2,
    title1: "Boost your business efficiency in impactful ways",
    title2: "ONE-STOP SOLUTIONS AND TAILORED SERVICES",
    imageBanner: banner2,
  },
  {
    id: 3,
    title1:
      "Become a pioneer in digital commerce utilizing the most advanced technologies",
    title2: "STATE-OF-THE-ART & DATA-DRIVEN PRODUCTS",
    imageBanner: banner3,
  },
  {
    id: 4,
    title1: "Accelerate your e-commerce growth with us",
    title2: "SOUTHEAST ASIA'S LEADING E-COMMERCE BUSINESS PARTNER",
    imageBanner: banner4,
  },
]

export default function SliderHome() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <>
      <div className="bdkTtOROci">
        <div className="RAiNllHuyS">
          <Slider className="uSDdEFzHYz" {...settings}>
            {slides.map(item => {
              return (
                <div className="ABlEMYolHz" key={item.id}>
                  <div className="lpvVqGcPTv">
                    <img alt={""} className="YHNyOFnTTo" src={banner1} />
                  </div>
                  <div className="qIfYHhThla">
                    <ContainerMain>
                      <div className="DEfBfkoSLD">
                        <div className="qBajkTIXyz">
                          <div className="jJlzQBvBIR">{item.title1}</div>
                          <div className="cuTmJTzgUC">{item.title2}</div>
                          {item.imageFooters && (
                            <div className="oaUyNLhdRP">
                              {item.imageFooters.map((footerImg, idx) => {
                                return (
                                  <img
                                    src={footerImg}
                                    alt=""
                                    className="bQLobhqdez"
                                    key={"image_" + idx}
                                  />
                                )
                              })}
                            </div>
                          )}
                        </div>
                        <div className="DCJiCEYvSD">
                          <img
                            alt=""
                            className="ShCDnSURBJ"
                            src={item.imageBanner}
                          />
                        </div>
                      </div>
                    </ContainerMain>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </>
  )
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <RightOutlined
      className={className}
      style={{ ...style, display: "block", color: "#eee", fontSize: 38 }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <LeftOutlined
      className={className}
      style={{ ...style, display: "block", color: "#eee", fontSize: 38 }}
      onClick={onClick}
    />
  )
}

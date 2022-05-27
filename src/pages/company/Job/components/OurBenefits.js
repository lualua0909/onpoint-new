import ContainerMain from "pages/common/ContainerMain"

import { RightOutlined, LeftOutlined } from "@ant-design/icons"
import Slider from "react-slick/lib/slider"

import './OurBenefits.scss'

export default function OurBenefits() {

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
      <div>
        <ContainerMain>
          <div className="dCFFwFPAcu">
            <div className="tgsCdfwJWq">
              <div className="MpDdBDbzXz">Our Benefits</div>
              <div className="KJZYFOliSB">Investing in your success</div>
              <div className="dCZizEwqFM">OnPoint’s commitment and dedication to your career development helps to set us apart as employer. We want to elevate your growth, unlock your personal and professional potential. Therefore, we provide every growth opportunity to enhance your knowledge, experience and skill-set by offering comprehensive training programs, leadership development opportunities, 1:1 mentorship and coaching, directly from our leadership team!</div>
            </div>
            <div>
              <div>Our benefits designed for you</div>
              <div>
                <div>
                  <div>Training</div>
                  <div>We commit to your growth journey and provide a plethora of training options that range from formal in classroom training programs to virtual sessions and online courses. Our e-Learning platform offers you a range of readily accessibly on-the-go skill building opportunities, that allows you to grow and learn at your own pace. </div>
                </div>
                <div>
                  <div>Bonus</div>
                  <div>OnPoint offers a comprehensive competitive benefits package with options designed to allow you to have significant short-, mid-, and long-term financial rewards interconnected to your performance and career role.</div>
                </div>
                <div>
                  <div>Healthcare</div>
                  <div>OnPoint offers various medical insurance options, that meet you and your family’s need.</div>
                </div>
                <div>
                  <div>Paid Leave</div>
                  <div>OnPoint offers a range of personal days off, depending on your seniority of service and job role.</div>
                </div>
                <div>
                  <div>Technology</div>
                  <div>We offer you a stress-free all-inclusive starter-kit that involves the tools and technology you require to accelerate in your designated role, be it tech equipment like laptop or transportation access.</div>
                </div>
              </div>
            </div>
            <div className="tgsCdfwJWq">
              <div className="KJZYFOliSB">Exceptional community</div>
              <div className="dCZizEwqFM">We truly believe that every individuals success at OnPoint is the community’s success. We offer you an exceptional working community that is inclusive, entrepreneurial, dynamic, productive and sustainable, as we understand that working in concert, allows our talents to thrive, not just survive. We want you to be inspired, challenged and motivated by handling your own great responsibilities where you can grow into the leaders of your own success story. We commit to provide you with wealth of experiences supplied by our diverse team and experienced leadership, that have footprints around the world to fuel your individual career development.</div>
            </div>
          </div>
        </ContainerMain>
      </div>
      <div>
        <ContainerMain>
          <div>
            <Slider className="uSDdEFzHYz" {...settings}>
              <div>
                <div>Humans of OnPoint</div>
                <div>OnPoint has always collaborated with Shiseido since Shiseido started developing e-Commerce until now. Shiseido and I are very fortunate to have a great partner who always understands, supports and accompanies brands like OnPoint, which has contributed a lot to Shiseido's achievements over the years.</div>
                <div><img /></div>
                <div>Mai Nguyen</div>
                <div>Senior E-commerce Manager</div>
              </div>
            </Slider>
          </div>
        </ContainerMain>
      </div>
    </>
  )
}
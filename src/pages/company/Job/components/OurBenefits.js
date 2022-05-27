import ContainerMain from "pages/common/ContainerMain"

import user3 from "images/Company/Job/user-3.png"
import icon3 from "images/Company/Job/icon-3.png"
import icon4 from "images/Company/Job/icon-4.png"

import { RightOutlined, LeftOutlined } from "@ant-design/icons"
import Slider from "react-slick";

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
  icon3
  icon4
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <img src={icon4} alt="" className="hvLesYaiKp" />,
    prevArrow: <img src={icon3} alt="" className="hvLesYaiKp" />,
  }

  return (
    <>
      <div className="vrfBhXUCVW">
        <ContainerMain>
          <div className="dCFFwFPAcu">
            <div className="tgsCdfwJWq">
              <div className="MpDdBDbzXz">Our Benefits</div>
              <div className="KJZYFOliSB">Investing in your success</div>
              <div className="dCZizEwqFM">OnPoint’s commitment and dedication to your career development helps to set us apart as employer. We want to elevate your growth, unlock your personal and professional potential. Therefore, we provide every growth opportunity to enhance your knowledge, experience and skill-set by offering comprehensive training programs, leadership development opportunities, 1:1 mentorship and coaching, directly from our leadership team!</div>
            </div>
            <div className="TfrjWAwzjt">
              <div className="GuBXJRjahi">Our benefits designed for you</div>
              <div className="HWiQpqmeiF">
                <div className="lkbgjzpoEE">
                  <div className="LQJZEHWvmF">Training</div>
                  <div className="DeECxWQGkU">We commit to your growth journey and provide a plethora of training options that range from formal in classroom training programs to virtual sessions and online courses. Our e-Learning platform offers you a range of readily accessibly on-the-go skill building opportunities, that allows you to grow and learn at your own pace. </div>
                </div>
                <div className="lkbgjzpoEE">
                  <div className="LQJZEHWvmF">Bonus</div>
                  <div className="DeECxWQGkU">OnPoint offers a comprehensive competitive benefits package with options designed to allow you to have significant short-, mid-, and long-term financial rewards interconnected to your performance and career role.</div>
                </div>
                <div className="lkbgjzpoEE">
                  <div className="LQJZEHWvmF">Healthcare</div>
                  <div className="DeECxWQGkU">OnPoint offers various medical insurance options, that meet you and your family’s need.</div>
                </div>
                <div className="lkbgjzpoEE">
                  <div className="LQJZEHWvmF">Paid Leave</div>
                  <div className="DeECxWQGkU">OnPoint offers a range of personal days off, depending on your seniority of service and job role.</div>
                </div>
                <div className="lkbgjzpoEE">
                  <div className="LQJZEHWvmF">Technology</div>
                  <div className="DeECxWQGkU">We offer you a stress-free all-inclusive starter-kit that involves the tools and technology you require to accelerate in your designated role, be it tech equipment like laptop or transportation access.</div>
                </div>
                <div className="lkbgjzpoEE"></div>
              </div>
            </div>
            <div className="tgsCdfwJWq">
              <div className="KJZYFOliSB">Exceptional community</div>
              <div className="dCZizEwqFM">We truly believe that every individuals success at OnPoint is the community’s success. We offer you an exceptional working community that is inclusive, entrepreneurial, dynamic, productive and sustainable, as we understand that working in concert, allows our talents to thrive, not just survive. We want you to be inspired, challenged and motivated by handling your own great responsibilities where you can grow into the leaders of your own success story. We commit to provide you with wealth of experiences supplied by our diverse team and experienced leadership, that have footprints around the world to fuel your individual career development.</div>
            </div>
          </div>
        </ContainerMain>
      </div>
      <div className="MsCexzJyID">
        <div className="oTdptEfzsb">
          <Slider className="hHRRVmYDUf" {...settings}>
            {
              [0, 1, 2, 3, 4, 5].map((item) => {
                return (
                  <div className="IDNtQHevrZ">
                    <div className="bmFbyvzkHC">
                      <div className="CfPcaKXrpk">Humans of OnPoint</div>
                      <div className="tvAeNUUDgy">OnPoint has always collaborated with Shiseido since Shiseido started developing e-Commerce until now. Shiseido and I are very fortunate to have a great partner who always understands, supports and accompanies brands like OnPoint, which has contributed a lot to Shiseido's achievements over the years.</div>
                      <div className="McaMBeiDup"><img alt="" className="CXgfhdWmKe" src={user3} /></div>
                      <div className="ktWcRjykgP">Mai Nguyen</div>
                      <div className="nTTPfsyYKi">Senior E-commerce Manager</div>
                    </div>
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </div>
    </>
  )
}
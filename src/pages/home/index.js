import React, { useEffect } from "react"
import "./index.scss"
import SliderHome from "./components/SliderHome"
import DiscoverOnPoint from "./components/DiscoverOnPoint"
import ClientsNumber from "./components/ClientsNumber"
import WhatWeDo from "./components/WhatWeDo"
import OurProducts from "./components/OurProducts"
import OurServices from "./components/OurServices"
import Clients from "./components/Clients"
import News from "./components/News"
import TalkOur from "./components/TalkOur"
import Helmet from "react-helmet"
import MessengerCustomerChat from "react-messenger-customer-chat"

const contents = [
  {
    id: 1,
    title: "360-DEGREE SERVICE",
    content:
      "The most important part of our business is to optimize your e-commerce value chain, through combining integrated one-stop solutions and designated services tailored to your business challenges. Our comprehensive, lean and customizable 360-degree services allow clients to develop effective strategies and translate these into real bottom line value for businesses.",
  },
  {
    id: 2,
    title: "COMPREHENSIVE SHOPPER JOURNEY",
    content:
      "We offer our clients holistic approaches and relevant technologies to explore and gain in-depth insights into their customer’s shopping journey. We help brands generate new leads, enhance conversion rate, increase recurring sales from existing ones and elevate your audiences’ experience to build sustainable customer engagements. We proliferate your top line growth through building trustful and deepened long-term relationships with your target audience.",
  },
  {
    id: 3,
    title: "OMNI-CHANNEL STRATEGY & EXECUTION",
    content:
      "E-commerce omnichannel strategy allows brands to engage with their customers on their own terms, while still offering many opportunities for convenience enhancement and seamless shopping experiences. We have succeeded in providing numerous clients with omni-channel strategies and will assist many more.",
  },
  {
    id: 4,
    title: "INNOVATIVE TECHNOLOGY",
    content:
      "We are continuously exploring technological developments to capture new trends, and to capitalize on new opportunities for growth. We work with industry leading technological experts to build new capabilities and try to unlock the most ROI-effective solutions for our clients. Our technology products cover end-to-end e-commerce value chain and are built based on our practical experience of operating e-commerce businesses.",
  },
]

// const _lang = lang();
function Home() {
  const checkScrollTop = () => {
    var reveals = document.querySelectorAll(".reveal")

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight
      var elementTop = reveals[i].getBoundingClientRect().top
      var elementVisible = 150

      if (elementTop < windowHeight - elementVisible) {
        console.log("reveals[i]", i)
        reveals[i].classList.add("active")
      } else {
        reveals[i].classList.remove("active")
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop, true)
    return () => {
      window.removeEventListener("scroll", checkScrollTop)
    }
  }, [])

  const animationComponents = [
    <DiscoverOnPoint />,
    <ClientsNumber />,
    <WhatWeDo contents={contents} title="What We Do" />,
    <OurProducts />,
    <OurServices />,
    <Clients />,
    <News />,
    <TalkOur />,
  ]

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Shojumaru&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Helmet>
      {/* slider ============== */}
      <SliderHome />
      {/* discover on point ========= */}
      {animationComponents?.map((component, key) => (
        <section key={key}>
          <div className="container reveal">{component}</div>
        </section>
      ))}

      <MessengerCustomerChat pageId="110901241628936" appId="362408319090880" />
      <a href="tel:+842873056686" className="float01">
        <span className="my-float fa-solid fa-headphones"></span>
      </a>
    </>
  )
}

export default Home

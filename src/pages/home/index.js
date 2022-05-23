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
    <WhatWeDo />,
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

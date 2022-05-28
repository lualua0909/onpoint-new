import { useState, useEffect } from 'react'
import PropTypes from "prop-types"
import LangHeader from "./LangHeader"
import MenuHeader from "./MenuHeader"
import FooterPage from "./FooterPage"

import "./Layout.scss"
import Seo from "./Seo"
import 'antd/dist/antd.css';

const Layout = ({ children }) => {
  const [scrollBar, setScrollBar] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.pageYOffset
      setScrollBar(scrollTop)
    }
    window.removeEventListener("scroll", onScroll)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <Seo />
      <div className={`ywedyxqmzp ${scrollBar > 0 ? "swcwhskqnx" : ""}`}>
        <LangHeader />
        <MenuHeader />
      </div>
      <main>{children}</main>
      <FooterPage />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

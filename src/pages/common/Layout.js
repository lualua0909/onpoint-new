import PropTypes from "prop-types"

import LangHeader from "./LangHeader"
import MenuHeader from "./MenuHeader"
import FooterPage from "./FooterPage"

import "./Layout.scss"
import Seo from "./Seo"

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <LangHeader />
      <MenuHeader />
      <main>{children}</main>
      <FooterPage />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

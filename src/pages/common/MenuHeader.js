import logo from "images/logo.png"
import ContainerMain from "src/pages/common/ContainerMain"
import { MenuFoldOutlined } from "@ant-design/icons"
import "./MenuHeader.scss"
import { useState } from "react"
import MenuHeaderItem from "./MenuHeaderItem"

const menu = [
  {
    name: "Products",
    link: "",
    children: [
      { name: "E Commerce Store", link: "/product-store" },
      { name: "Online-Offline Integrated", link: "/product-integrated" },
      {
        name: "AI/Machine Learning Marketing Campaign Management",
        link: "/product-campaign",
      },
      { name: "Performance Dashboard", link: "/product-performance" },
    ],
  },
  {
    name: "Services",
    link: "",
    children: [
      { name: "E-marketing Management			", link: "/service-marketing" },
      { name: "E-store Management", link: "/service-store" },
      { name: "Shopper Engagement", link: "/service-engagement" },
      { name: "Omni-channel Logistics & Fulfilment", link: "/service-logistics" },
    ],
  },
  {
    name: "Channels",
    link: "",
    children: [
      { name: "Example", link: "/" },
      { name: "Example", link: "/" },
      { name: "Example", link: "/" },
      { name: "Example", link: "/" },
    ],
  },
  {
    name: "Clients & Partners",
    link: "",
    children: [
      { name: "Example", link: "/" },
      { name: "Example", link: "/" },
      { name: "Example", link: "/" },
      { name: "Example", link: "/" },
    ],
  },
  {
    name: "Company",
    link: "",
    children: [
      { name: "Example", link: "/" },
      { name: "Example", link: "/" },
      { name: "Example", link: "/" },
      { name: "Example", link: "/" },
    ],
  },
]

export default function MenuHeader() {
  const [showMenu, setShowMenu] = useState(false)
  const [showMenuChildren, setShowMenuChildren] = useState(null)

  const handleChangePage = url => {
    window.location.href = url
  }

  return (
    <div className={`iLADtaueIG`}>
      <ContainerMain>
        <div className="ikDOvZxITU">
          <div className="kqAdKcHozX" onClick={() => handleChangePage("/")}>
            <img alt="Logo" className="EWvuKglUKN" src={logo} />
          </div>
          <div className="ZOuiUtHtvp">
            {showMenu ? (
              <div
                className="TNIwwzouys"
                onClick={() => setShowMenu(false)}
              ></div>
            ) : null}
            <div className="XZsqtMffgA" onClick={() => setShowMenu(!showMenu)}>
              <MenuFoldOutlined />
            </div>
            <div className={`VyaXyKqXLW ${showMenu ? "HpUaUurwJO" : ""}`}>
              <div className="qrhkBMYcGX">
                <ul className="gGzOKdvNuu">
                  {menu.map((item, key) => {
                    return (
                      <MenuHeaderItem
                        data={item}
                        key={key}
                        showMenuChildren={showMenuChildren}
                        setShowMenuChildren={setShowMenuChildren}
                      />
                    )
                  })}
                </ul>
              </div>
              <a className="IQCByjNAdN" href="#ContactUs">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </ContainerMain>
    </div>
  )
}

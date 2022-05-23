import { useState } from "react"
import { DownOutlined, ArrowRightOutlined } from "@ant-design/icons"

export default function MenuHeaderItem({
  data,
  showMenuChildren,
  setShowMenuChildren,
}) {
  const handleChangePage = url => {
    if (url) {
      window.location.href = url
    } else {
      setShowMenuChildren(null)
    }
  }

  return (
    <li
      className={`wzChTCzOBu ${
        showMenuChildren === data?.name ? "BWdppYCOKf" : ""
      }`}
    >
      <div
        className="ijgePvHfdq"
        onClick={() => {
          if (showMenuChildren === data?.name) {
            setShowMenuChildren(null)
          } else {
            setShowMenuChildren(data?.name)
          }
        }}
      >
        <span className="dvkRvnvuKA">{data?.name}</span>
        <span className="mVtISIbDJs">
          <DownOutlined style={{ fontSize: 12, verticalAlign: 0 }} />
        </span>
      </div>
      {data?.children?.length && (
        <div className={`FOsxgdKAoW`}>
          <ul className="vPNTAJAHGT">
            {data?.children.map((item, index) => {
              return (
                <li
                  key={index}
                  className="mmhezgHPkc"
                  onClick={() => handleChangePage(item?.link)}
                >
                  <span>{item?.name}</span>
                  <ArrowRightOutlined
                    className="right-arrow"
                    style={{ color: "red" }}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </li>
  )
}

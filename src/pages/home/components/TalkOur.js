import { useState } from "react"

import ContainerMain from "src/pages/common/ContainerMain"
import "./TalkOur.scss"

export default function TalkOur() {
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [enquiryInformation, setEnquiryInformation] = useState("")

  let handleSubmit = async e => {
    e.preventDefault()
    try {
      let res = await fetch(
        "https://www.onpoint.vn/wp-json/contact-form-7/v1/contact-forms/898/feedback",
        {
          method: "POST",
          body: JSON.stringify({
            "text-940": name,
            "text-256": company,
            "email-272": email,
            "text-941": phoneNumber,
            "textarea-26": enquiryInformation,
          }),
        }
      )
      let resJson = await res.json()
      if (resJson.status === 200) {
        setName("")
        setEmail("")
        setCompany("")
        setPhoneNumber("")
        setEnquiryInformation("")
        // setMessage("User created successfully")
      } else {
        // setMessage("Some error occured")
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <div className="oXmLJFVbCY" id="ContactUs">
        <ContainerMain>
          <div className="RFhgMbXcWi">
            <div className="KBfdetaVEx">Talk with Our E-commerce Experts</div>
            <form className="IOhjqpcGaV">
              <div className="iiJRBrULDD">
                <div className="WgCqrkCtGE">
                  <input
                    placeholder="Your Name*"
                    required={true}
                    value={name}
                    className="AxKKLeIQDt"
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="WgCqrkCtGE">
                  <input
                    placeholder="Company*"
                    required={true}
                    className="AxKKLeIQDt"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                  />
                </div>
                <div className="WgCqrkCtGE">
                  <input
                    placeholder="Email*"
                    required={true}
                    className="AxKKLeIQDt"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="WgCqrkCtGE">
                  <input
                    placeholder="Phone Number*"
                    required={true}
                    className="AxKKLeIQDt"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="iiJRBrULDD">
                <div className="WgCqrkCtGE">
                  <textarea
                    placeholder="Enquiry Information"
                    required={true}
                    className="ccVmkNCuoy"
                    value={enquiryInformation}
                    onChange={e => setEnquiryInformation(e.target.value)}
                  />
                </div>
                <div className="WgCqrkCtGE">
                  <button type="submit" className="oUAqsnxgdr">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </ContainerMain>
      </div>
    </>
  )
}

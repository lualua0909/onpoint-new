import ContainerMain from "pages/common/ContainerMain"

import new1 from "images/Company/Blog/new-1.png"

import './Tabnew.scss'

export default function Tabnew() {
  return (
    <>
      <div className="VMUOqxQmhV">
        <div className="AoJWRgRSJU">
          <div className="KHLOgJdVEA DSIsoERGBs">Tech Blogs</div>
          <div className="KHLOgJdVEA">E-com Blogs</div>
        </div>
        <div className="wLZyEorIXA">
          <ContainerMain>
            <div className="jsLQNqcNGk">
              <div className="TSCQysXagF">Highlight</div>
              <div className="MfMKETAyeK">
                <div className="YDUqZVaEXx"><img src={new1} alt="" className="REJCdcJGLC" /></div>
                <div className="EouhQVFgnk">
                  <div className="xoMfeDjLfZ">
                    <div className="zTXlXBYbxv">Blogs</div>
                    <div className="nXnWOxmwOU">18:00 22/2/2022</div>
                  </div>
                  <div className="fXQJNrtARH">OnPoint's Tran Vu Quang on how innovations are optimizing e-commerce operations and driving new opportunities for growth...</div>
                  <div className="tAgywSKksr">E-commerce has become a driver of growth in an increasingly digitalized business environment. A report by Facebook and Bain & Co cites that Southeast Asia gained 70 million new e-commerce customers since the start of the pandemic, with the new normal having “resulted in new purchasing habits, new ways to discover, new preferences and new expectations.”
                    Through innovations like artificial intelligence and machine learning....</div>
                  <div className="dhcnmdtKKa">Read more</div>
                </div>
              </div>
            </div>
          </ContainerMain>
        </div>
      </div>
    </>
  )
}
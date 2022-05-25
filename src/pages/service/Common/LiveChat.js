import './LiveChat.scss'
import ContainerMain from "src/pages/common/ContainerMain"

import image1 from 'images/Service/Engagement/image-1.png'
import icon1 from 'images/Service/Engagement/icon-1.png'

export default function LiveChat() {
  return (
    <>
      <div className='kcxjysztfe'>
        <ContainerMain>
          <div className='wwzdjczuoz'>
            <div className='pfmadssorp'>Live chat</div>
            <div className='jfbwuhhkny'>With well-trained agents who deeply understand about brands, products and
              promotions, we deliver a 100% response rate and high volume chat management.</div>
            <div className='fgjkakcees'>
              <div className='fgzmmwwuip'><img src={image1} className='ogqhdosiss' /></div>
              <div className='cjzlmcwlag'>
                <div className='azxnxwmvlf'>Chatbot</div>
                <div className='qfqzxdzcfb'>We provide a much better Customer Experience in CS/CX activities at a lower cost via chatbot. We also develop a new source of service revenue in the near future for existing and upcoming client base.</div>
                <div className='rcmhgopyqm'>Various Types for Your Business Needs</div>
                <div className='kcrbuvcjtp'>
                  <div className='xcdodbozxl'>
                    <div className='oishwwdkzf'><span>Sales chatbot</span>: Generating Sales from current customers via Broadcasting messages</div>
                    <img src={icon1} alt="" className='thrvhxrtvf' />
                  </div>
                  <div className='xcdodbozxl'>
                    <div className='oishwwdkzf'><span>Re-marketing chatbot:</span> Customizing marketing effort to different customer segments based on their historical data</div>
                    <img src={icon1} alt="" className='thrvhxrtvf' />
                  </div>
                  <div className='xcdodbozxl'>
                    <div className='oishwwdkzf'><span>Engagement chatbot:</span> Enhancing Brand love & digital experience</div>
                    <img src={icon1} alt="" className='thrvhxrtvf' />
                  </div>
                  <div className='xcdodbozxl'>
                    <div className='oishwwdkzf'><span>Customer Service chatbot:</span> 24/7 digital experience, driving down cost by auto-reply repetitive questions</div>
                    <img src={icon1} alt="" className='thrvhxrtvf' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerMain>
      </div>
    </>
  )
}
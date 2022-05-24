import BannerHeader from "../Common/BannerHeader"
import WhyProduct from "../Common/WhyProduct"

import banner from "images/Product/Campaign/banner-1.png"
import logoBanner1 from "images/Product/Campaign/logo-banner-1.png"
import icon1 from "images/Product/Campaign/icon-1.png"
import image3 from "images/Product/Campaign/image-3.png"
import image4 from "images/Product/Campaign/image-4.png"

import "./Campaign.scss"
import Recommentdation from "./components/Recommentdation"
import ModelConcept from "./components/ModelConcept"
import ModelConcept2 from "./components/ModelConcept2"
import New from "./components/New"
import GetStart from "../Common/GetStart"

export default function Campaign() {
  return (
    <>
      <BannerHeader
        breadcum="Home/ Products/ AI/Machine Learning Data-driven Solutions"
        banner={banner}
        logo={logoBanner1}
        listTitle={["AI/Machine Learning", "Marketing Campaign Management"]}
        description={""}
      />
      <WhyProduct
        title={"What We Offer"}
        marginTitle={"0 0 24px 0"}
        description={`We have developed a big data & AI ecosystem that allows the creation of high-value 
        analytics that optimizes customer experience, loyalty and revenues. This includes state-of-
        the-art solutions for brands like product recommendations, shopper segmentation and 
        persona analytics, complete with multiple activation channels to interact with the customer.
         We are the first e-commmerce enabler to impement this intelligent platform in Vietnam.	`}
        image={""}
      />
      <WhyProduct
        iconHeader={icon1}
        title={`#1 AI-Driven Personalized 
        Product Recommendation`}
        marginTitle={"0 0 24px 0"}
        description={`The AI-Driven Personalized Product Recommendation solution looks into multiple sets of data 
        including individual shopper’s demographics, different categories of products purchased, 
        different channels of purchases by shopper, frequency of purchases, payment methods, and 
        many more. The solution is able to provide a 50% to 500% improvement in sales. We expand 
        the solution to more e-commerce merchants and brands as it will benefit them in driving better 
        sales at a lower cost.	`}
        image={""}
      />
      <Recommentdation />
      <ModelConcept />
      <div className="sQEPOxcDwQ">
        Next-Best-Offer - AI/Machine Learning Yielded <span>1.5x</span> Better
        Result than Human
      </div>
      <ModelConcept2 />
      <div className="sQEPOxcDwQ">
        Product Suitability – AI/Machine Learning Yielded <span>5x</span> Better
        Result than Human
      </div>
      <WhyProduct
        iconHeader={icon1}
        title={`#2 AI-Driven Shopper Segmentation &
         Persona Analytics for Brands`}
        marginTitle={"0 0 24px 0"}
        description={`Our platform’s ability to ingest and combine multiple online and offline data points gives it the 
        ability to perform micro-segmentation of your users so that you can precisely target the right 
        users with the right products at the right time.
        Here’s an example of how we can segment users based on their transaction recency, frequency 
        and monetary value.`}
        image={image3}
      />
      <WhyProduct
        iconHeader={""}
        title={``}
        marginTitle={"0 0 24px 0"}
        description={`Once we accumulate enough data from the brand, we can also start to deploy advanced AI 
        capabilities to automatically discover new customer segments – in this example, AI has 
        discovered 3 different user segments based on 5 dimensions - purchase frequency, order value, 
        household income, age & gender - what does that mean for performance marketing? It means 
        you can run very targeted campaigns based on the ever-changing dynamics of your users.`}
        image={image4}
      />
      <New />
      <GetStart />
    </>
  )
}

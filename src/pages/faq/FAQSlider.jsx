/* eslint-disable react/prop-types */
import FAQCard from "./FAQCard"


const FAQSlider = ({faqs}) => {
  return (
    <div className="faq-slider mt-16">
        <hr />
        {
            faqs.map((faq,index)=>(
                <FAQCard key={index} question={faq.question} answer={faq.answer} />
            ))
        }
    </div>
  )
}

export default FAQSlider
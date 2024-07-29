/* eslint-disable react/prop-types */
import { useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const FAQCard = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = ()=>{
        setIsOpen(!isOpen);
    }
  return (
    <div className="p-6">
        
        <div className="flex place-items-start justify-between pl-32 pr-16 m-auto
        miniTablet:p-6
        bigPhone:p-3
        phone:p-1
        miniPhone:p-1

        ">
            <h2 className="text-gray-700 font-bold text-3xl 
            bigPhone:text-2xl
            phone:text-xl
            miniPhone:text-xl
            ">
                {question}
            </h2>
            <button onClick={toggleAnswer}
          className="text-blue-500 focus:outline-none text-4xl font-bold">
                {
                    isOpen ? <IoIosArrowUp/>
                    :
                    <IoIosArrowDown />
                }
            </button>
        </div>
        <div className={`ml-48 mt-8 overflow-hidden transition-max-height duration-200 ease-in-out ${isOpen ?  'max-h-screen w-2/3   text-gray-500 font-bold text-3xl ': 'max-h-0'}
        miniTablet:ml-20 miniTablet:mt-4 miniTable:text-2xl
        bigPhone:ml-16 bigPhone:mt-4  bigPhone:text-xl
        phone:ml-8 phone:mt-4 phone:text-lg phone:w-full
        miniPhone:ml-8 miniPhone:mt-4 miniPhone:text-base miniPhone:w-full
        `}>
            <p>
                {answer}
            </p>
        </div>
        <hr />
    </div>
  )
}

export default FAQCard
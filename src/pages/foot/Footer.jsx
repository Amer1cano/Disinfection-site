import { FaBug } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { FaPhone } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { useTranslation } from "react-i18next";


const Footer = () => {
  const {t} = useTranslation();
  return (
    <div className="mt-20 p-4">

   
     <hr className="text-black bg-black my-4 border-t-2 border-gray-500" />
     <div className=" flex items-center justify-between 
     tablet:block
     miniTablet:block
     bigPhone:block
     phone:block
     miniPhone:block
     ">
        <div className="mt-20 mb-20
        tablet:mt-4 tablet:mb-4
        miniTablet:mt-4 miniTablet:mb-4
        bigPhone:mt-4 bigPhone:mb-4
        phone:mt-4 phone:mb-4
        miniPhone:mt-4 miniPhone:mb-4
        ">
            <button className="flex items-center justify-evenly font-semibold text-blue-700 p-4 text-5xl 
            desktop:text-4xl
             miniDesktop:text-3xl miniDesktop:p-2 
             bigTablet:text-2xl bigTablet:p-2
             phone:p-0 phone:text-4xl
             miniPhone:p-0 miniPhone:text-4xl
             
             ">
            <FaBug className="text-blue-600 text-5xl 
            desktop:text-4xl mr-2 
            miniDesktop:text-3xl 
            bigTablet:text-2xl
            phone:text-4xl
            miniPhone:text-3xl
            
            "/>
                {t('Dizinfeksiya')}
                </button>
                
        </div>
        <div className="grid grid-cols-2 gap-2
        tablet:grid-cols-1 tablet:gap-8 tablet:p-4
        miniTablet:grid-cols-1 miniTablet:gap-8 miniTablet:p-4
        bigPhone:grid-cols-1 bigPhone:gap-6 bigPhone:p-4
        phone:grid-cols-1 phone:gap-4 phone:p-0
        miniPhone:grid-cols-1 miniPhone:gap-2 miniPhone:p-0
        ">
                <a href="#about" className="text-2xl 
                 miniDesktop:text-lg 
                 bigTablet:text-lg
                 bigPhone:text-lg
                 phone:text-base
                 miniPhone:text-sm
                 
                 ">
                    <button className="mr-6  bg-gray-300 p-4 rounded-lg desktop:ml-1 desktop:p-2
                    bigPhone:mr-2
                    phone:p-2
                    miniPhone:p-2
                    ">
                    <GoLocation/>
                    </button>
                    {t('Ozbekiston, Toshkent shahri')}
                    <button className="ml-6 p-4 rounded-lg desktop:ml-4 desktop:p-2
                    bigPhone:ml-0
                    phone:hidden
                    miniPhone:hidden
                     ">
                        <MdArrowOutward/>
                    </button>
                </a>
           
                <a href="+998 978373979" className="text-2xl 
                miniDesktop:text-lg 
                 bigTablet:text-lg
                 bigPhone:text-lg
                 phone:text-base
                 miniPhone:text-sm
                 
                 ">
                     <button className="mr-8 bg-gray-300 p-4 rounded-lg desktop:ml-4 desktop:p-2
                     bigPhone:mr-2
                     phone:p-2
                     miniPhone:p-2
                     ">
                        <FaPhone/> 
                    </button>
                      +998 978373979
                      <button className="ml-8 p-4 rounded-lg desktop:ml-4 desktop:p-2 
                      bigPhone:ml-0
                      phone:hidden
                      miniPhone:hidden
                      ">
                        <MdArrowOutward/>
                    </button>
                </a>
            
        </div>
    </div>
    </div>
  )
}

export default Footer
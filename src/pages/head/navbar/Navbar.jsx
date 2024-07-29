import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBug } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import { FaXmark } from "react-icons/fa6";


const Navbar = () => {
  const [ismobile, setIsmobile] = useState(false);
  const [scroll, setScroll] = useState(false);
const language = localStorage.getItem('i18nextLng')

  const {t,i18n} = useTranslation();
  const handleChange = (event)=>{
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(()=>{
    const handleResize = ()=>{
      if(window.innerWidth > 768){
        setIsmobile(false)
      }
    }
    window.addEventListener('resize', handleResize)
  },[])



  return (
    <div className={`fixed top-0 w-full p-4 z-50 transition-colors duration-300 ${scroll ? 'bg-gray-100' : 'bg-transparent'} flex items-center justify-between`}>
        <div >
            <button className="flex items-center justify-evenly font-semibold text-blue-700 p-4 text-5xl
             bigTablet:text-3xl 
            bigPhone:text-4xl
            phone:text-3xl
            miniPhone:text-2xl
             
             ">
            <FaBug className="text-blue-600 text-5xl mr-2 
            miniDesktop:text-3xl 
            bigTablet:text-2xl 
            bigPhone:text-4xl
            phone:text-3xl
            miniPhone:text-2xl

            
            "/>
                {t('Dizinfeksiya')}
                </button>
                
        </div>
       <div className={` tablet:hidden mt-2 miniTablet:hidden bigPhone:hidden phone:hidden miniPhone:hidden`} >
        <ul className={` flex items-center justify-between  `}>
            <li className="  ml-4 text-xl  hover:underline underline-offset-8 miniDesktop:text-lg">
            <a href="#service">{t('Xizmatlar')}</a>
            </li>
            <li className=" ml-4 text-xl hover:underline underline-offset-8 miniDesktop:text-lg">
             <a href="#about">{t('Biz haqimizda')}</a>
            </li>
            <li className=" ml-4 text-xl hover:underline underline-offset-8 miniDesktop:text-lg">
            <a href="#benefits">{t('Afzalliklar')}</a>
            </li>
            <li className=" ml-4 text-xl hover:underline underline-offset-8 miniDesktop:text-lg">
            <a href="#faq">{t('FAQ')}</a>   
            </li>
            <li className=" ml-4 text-xl hover:underline underline-offset-8 miniDesktop:text-lg">
            <a href="#contact">{t('Kontakt')}</a>
            </li>
        </ul>
      
       
       </div>
       {
        ismobile && (
          
            <ul className={`${ismobile? "  flex flex-col w-screen absolute z-1 top-24 left-0 text-center text-white  items-center gap-2 py-6  bg-black" : "tablet:hidden "} desktop:invisible`}>
            <li className="  text-xl  hover:underline underline-offset-8 miniDesktop:text-lg tablet:text-3xl tablet:font-bold miniTablet:text-3xl">
            <a href="#service">{t('Xizmatlar')}</a>
            </li>
            <li className=" text-xl hover:underline underline-offset-8 miniDesktop:text-lg tablet:text-3xl tablet:font-bold miniTablet:text-3xl">
             <a href="#about">{t('Biz haqimizda')}</a>
            </li>
            <li className=" text-xl hover:underline underline-offset-8 miniDesktop:text-lg tablet:text-3xl tablet:font-bold miniTablet:text-3xl">
            <a href="#benefits">{t('Afzalliklar')}</a>
            </li>
            <li className=" text-xl hover:underline underline-offset-8 miniDesktop:text-lg tablet:text-3xl tablet:font-bold miniTablet:text-3xl">
            <a href="#faq">{t('FAQ')}</a>   
            </li>
            <li className=" text-xl hover:underline underline-offset-8 miniDesktop:text-lg tablet:text-3xl tablet:font-bold miniTablet:text-3xl">
            <a href="#contact">{t('Kontakt')}</a>
            </li>
            <div>
        <select value={language} name="Lng" id="lng1" onChange={handleChange} className="text-yellow-700 border-solid border-2 text-2xl border-gray-400 rounded-lg pl-2 outline-none mt-2 
        bigPhone:text-xl
        phone:text-xl 
        miniPhone:text-lg
        ">
            <option value="uz">Uzbek</option>
            <option value="ru">Russia</option>
            <option value="en">English</option>
        </select>
        <button className="
       px-4 py-2 rounded-full 
       bg-blue-600
       hover:bg-blue-800
        miniDesktop:px-3 miniDesktop:py-1
        mr-4 ml-8
        bigPhone:px-3 bigPhone:py-1
        phone:px-3 phone:py-1
        miniPhone:px-3 miniPhone:py-1

        
         ">
            <a className="text-2xl text-white  font-bold 
            miniDesktop:text-lg 
            bigTablet:text-base
            bigPhone:text-xl
            phone:text-lg 
            miniPhone:text-base

            " href="#contact">{t('Boglanish')}</a>
         </button>
       </div>
        </ul>
          
        )
       }
       <div>
        <select value={language} name="Lng" id="lng" onChange={handleChange} className="text-center m-auto border-solid border-2 text-2xl border-gray-400 rounded-lg  outline-none miniDesktop:text-lg miniDesktop:top-0 bigTablet:text-base tablet:hidden mt-3 miniTablet:hidden bigPhone:hidden phone:hidden miniPhone:hidden">
            <option value="uz">Uzbek</option>
            <option value="ru">Russia</option>
            <option value="en">English</option>
        </select>
       </div>
       <div className="">
      
    <div className="flex items-center justify-between mt-3">
    <button className="
       px-4 py-2 rounded-full 
       bg-blue-600
       hover:bg-blue-800
        miniDesktop:px-3 miniDesktop:py-1
        tablet:hidden
        miniTablet:hidden bigPhone:hidden phone:hidden miniPhone:hidden
         ">
            <a className="text-2xl text-white  font-bold miniDesktop:text-lg bigTablet:text-base " href="#contact">{t('Boglanish')}</a>
         </button>
         <button  className={`invisible m-auto text-center text-4xl ml-8 tablet:visible miniTablet:visible bigPhone:visible phone:visible miniPhone:visible
         phone:text-3xl phone:pb-2
         miniPhone:text-3xl miniPhone:pb-2
         `}
        onClick={() =>{
            setIsmobile(!ismobile)
        }}>
            {ismobile ? (<FaXmark />) : (
            <SlMenu />
            )}
        </button>
    </div>
        







       </div>
    </div>
  )
}

export default Navbar
import { GiBrainstorm } from "react-icons/gi";
import { PiMedalBold } from "react-icons/pi";
import { MdHandshake } from "react-icons/md";
import { useTranslation } from "react-i18next";

const About = () => {
    const {t} = useTranslation();
    
  return (
    <div id="about" className="mt-16 p-4">
        <div className="overflow-hidden">
            <h1 data-aos="fade-right"  className="text-6xl font-bold text-black 
            bigTablet:text-5xl
            tablet:text-5xl
            miniTablet:text-5xl
            bigPhone:text-4xl
            phone:text-4xl
            miniPhone:text-3xl

            ">{t('Biz haqimizda')}</h1>
            <hr className="mt-16" />
            <div  className="flex items-center justify-between gap-4 
            bigTablet:block
            tablet:block
            miniTablet:block
            bigPhone:block
            phone:block
            miniPhone:block
            

             ">
                <div 
                data-aos="fade-right"
                data-aos-duration="800"
                  className="p-8 w-1/3 
                  bigTablet:w-full bigTablet:border-gray-500 bigTablet:border-2 bigTablet:rounded-xl  bigTablet:mb-4 
                  tablet:w-full tablet:border-gray-500 tablet:border-2 tablet:rounded-xl tablet:mb-4
                  miniTablet:w-full miniTablet:border-gray-500 miniTablet:border-2 miniTablet:rounded-xl miniTablet:mb-4  
                  bigPhone:w-full bigPhone:border-gray-500 bigPhone:border-2 bigPhone:rounded-xl bigPhone:mb-4 
                  phone:w-full phone:border-gray-500 phone:border-2 phone:rounded-xl phone:mb-4    
                   miniPhone:w-full miniPhone:border-gray-500 miniPhone:border-2 miniPhone:rounded-xl miniPhone:mb-4               
                  ">
                <GiBrainstorm className="text-7xl  text-blue-700" />
                <h1 className="text-4xl mt-4 font-bold text-black
                phone:text-3xl
                miniPhone:text-2xl
                ">{t('Tezda xizmat korsatish')}</h1>
                <p className="text-xl mt-6 font-thin
                phone:text-lg
                miniPhone:lg
                ">{t('Arizalar kuniga 24 soat qabul qilinadi. Agar muammo juda shoshilinch bolsa, biz darhol yordam korsatishimiz mumkin. Shu bilan birga sifat ham mukammal bolib qoladi.')}</p>
                </div>
                <div 
                data-aos="fade-up"
                data-aos-duration="1000"
                className="p-8 w-1/3 
                bigTablet:w-full bigTablet:border-gray-500 bigTablet:border-2 bigTablet:rounded-xl bigTablet:mb-4 
                tablet:w-full tablet:border-gray-500 tablet:border-2 tablet:rounded-xl tablet:mb-4
                  miniTablet:w-full miniTablet:border-gray-500 miniTablet:border-2 miniTablet:rounded-xl miniTablet:mb-4
                  bigPhone:w-full bigPhone:border-gray-500 bigPhone:border-2 bigPhone:rounded-xl bigPhone:mb-4
                  phone:w-full phone:border-gray-500 phone:border-2 phone:rounded-xl phone:mb-4 
                   miniPhone:w-full miniPhone:border-gray-500 miniPhone:border-2 miniPhone:rounded-xl miniPhone:mb-4 
                ">
                <PiMedalBold className="text-7xl  text-blue-700" />
                <h1 className="text-4xl mt-4 font-bold text-black
                phone:text-3xl
                miniPhone:text-2xl
                
                ">{t('Yetuk mutaxassislarimiz')}</h1>
                <p className="text-xl mt-6 font-thin
                phone:text-lg
                miniPhone:text-lg
                ">
                    {t('Bizning xodimlarimiz hamma narsalarga gamxorlik qilishadi: hisob-kitoblar, xonani tayyorlash, qayta ishlash, yakuniy tozalash, ventilyatsiya hamda nazorat tekshiruvi.')}
                </p>
                </div>
                <div
                data-aos="fade-left"
                data-aos-duration="850"
                 className="p-8 w-1/3 
                 bigTablet:w-full bigTablet:border-gray-500 bigTablet:border-2 bigTablet:rounded-xl bigTablet:mb-4
                 tablet:w-full tablet:border-gray-500 tablet:border-2 tablet:rounded-xl tablet:mb-4
                    miniTablet:w-full miniTablet:border-gray-500 miniTablet:border-2 miniTablet:rounded-xl miniTablet:mb-4
                    bigPhone:w-full bigPhone:border-gray-500 bigPhone:border-2 bigPhone:rounded-xl bigPhone:mb-4
                    phone:w-full phone:border-gray-500 phone:border-2 phone:rounded-xl phone:mb-4 
                     miniPhone:w-full miniPhone:border-gray-500 miniPhone:border-2 miniPhone:rounded-xl miniPhone:mb-4 
                 ">
                <MdHandshake className="text-7xl  text-blue-700" />
                <h1 className="text-4xl mt-4 font-bold text-black
                phone:text-3xl
                miniPhone:text-2xl
                ">
                    {t('Sizga maqul vaqtda')}

                </h1>
                <p className="text-xl mt-6 font-thin
                phone:text-lg
                miniPhone:text-lg
                
                ">
                    {t('Siz ozingiz uchun eng qulay va maqul vaqtni tanlang va bizga murojaat qiling. Sizga kafolatlangan, samarali va eng muhimi hamyonbop natijani olib boramiz.')}
                </p>
                </div>
            </div>
            <div className=" bg-hero-disinfection bg-center bg-no-repeat bg-cover bg-fixed rounded-lg  mt-16">
                <div className="p-16 pl-64 pt-20  w-2/3 ml-96 
                desktop:ml-80 
                miniDesktop:pl-10
                 bigTablet:pl-8
                 tablet:pl-0 tablet:ml-40
                 miniTablet:pl-0 miniTablet:ml-0  miniTablet:w-full miniTablet:text-center miniTablet:p-8
                 bigPhone:p-6 bigPhone:ml-0 bigPhone:w-full bigPhone:text-center
                 phone:p-4 phone:ml-0 phone:w-full phone:text-center
                 miniPhone:p-3 miniPhone:ml-0 miniPhone:w-full miniPhone:text-center

                 ">
                    <h1 className="text-5xl font-bold text-white 
                    bigTablet:text-4xl
                    bigPhone:text-4xl
                    phone:text-3xl
                    miniPhone:text-3xl
                   
                    
                    ">
                        {t('Klapa va zararli hasharot endi yoq deb hisoblang!')}
                    </h1>
                    <p className="text-2xl mt-8 font-thin  text-white
                    phone:text-xl
                    miniPhone:text-xl
                    ">
                        {t('Biz kop yillardan beri oz ishini samarali tarzda malga oshirayotgan kompaniyamiz. Barcha mijozlarimiz bizdan mamnun.')}
                    </p>
                    <button
                    data-aos="flip-down"
                     className="p-2 pl-4 pr-4 mt-16 rounded-lg bg-blue-600 hover:bg-blue-800">
                         <a className="text-2xl text-white font-bold
                         miniPhone:text-xl
                         " href="contact">
                            {t('Boglanish')}
                         </a>
                      </button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About
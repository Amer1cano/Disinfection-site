import { useTranslation } from 'react-i18next';
import rasm1 from '/head-images/image1.png'
import rasm2 from '/head-images/image2.png'
import rasm3 from '/head-images/image3.png'
import person from '/head-images/person.png'
import { RiArrowRightUpLine } from "react-icons/ri";

const Head = () => {
  const {t} = useTranslation();
  return (
    <div className=' p-4'>
      <div className='flex items-center justify-between mt-32 w-auto p-16 rounded-b-xl 
      tablet:bg-gradient-image tablet:bg-center tablet:bg-cover
      miniTablet:bg-gradient-image miniTablet:bg-center miniTablet:bg-cover miniTablet:p-8
      bigPhone:bg-gradient-image bigPhone:bg-center bigPhone:bg-cover bigPhone:p-4 bigPhone:rounded-xl
      phone:bg-gradient-image phone:bg-center phone:bg-cover phone:p-4 phone:rounded-xl
      miniPhone:bg-gradient-image miniPhone:bg-center miniPhone:bg-cover miniPhone:p-4 miniPhone:rounded-xl


      '>
      <div>
            <h1 className='text-blue-700 text-7xl font-bold 
            miniDesktop:text-6xl 
            bigTablet:text-5xl
              tablet:text-white tablet:text-4xl
               miniTablet:text-white miniTablet:text-4xl
                bigPhone:text-white bigPhone:text-4xl
                 phone:text-white phone:text-3xl
                  miniPhone:text-white miniPhone:text-2xl
            '>{t('Dizinfeksiya xizmati')} </h1>
            <div className='flex items-center justify-between p-4 w-auto'>
                <h1  className=' text-lg text-black w-96 
                miniDesktop:w-80
                tablet:text-white tablet:font-bold tablet:w-full
                 miniTablet:text-white miniTablet:font-bold miniTablet:w-full 
                  bigPhone:text-white bigPhone:font-bold bigPhone:w-full
                   phone:text-white phone:font-bold phone:w-full phone:text-base
                    miniPhone:text-white font-bold miniPhone:w-full miniPhone:text-sm
                '>{t('Biz ko’p yillardan beri o’z  faoliyatini olib kelayotgan  kompaniyamiz. Har qanday turdagi zararkunandalardan qanday qutulishni juda yaxshi bilamiz. Mijozlarimiz bizdan mamnun!')}</h1>
                <div className='w-auto
                tablet:hidden 
                miniTablet:hidden
                 bigPhone:hidden
                  phone:hidden 
                  miniPhone:hidden
                '>
                  <div className='z-0'>
                <img className=' w-20 
                miniDesktop:w-16
                 bigTablet:w-14 bigTablet:ml-2
                 ' src={rasm1} alt='doira' />
                  </div>
                  <div className='z-40 mt-[-60px] ml-8
                   miniDesktop:mt-[-50px]'>

                <img className=' w-28
                 bigTablet:w-20
                 ' src={rasm2}/>
                  </div>
                  <div className='z-60 mt-[-100px] ml-16 
                  miniDesktop:mt-[-120px]
                   bigTablet:w-36
                   '>

                <img src={rasm3}/>
                  </div>
                </div>

            </div>
            <button className="p-2 pl-4 pr-4 rounded-lg bg-blue-600 hover:bg-blue-800">
            <a className="text-2xl text-white font-bold
            phone:text-xl
            miniPhone:text-lg
            " href="#contact">{t('Boglanish')}</a>
         </button>
         <button className='p-3 pl-4 pr-4 rounded-lg border-solid border-2 border-slate-400 ml-1
         tablet:bg-blue-600 tablet:text-white tablet:border-none tablet:p-3.5
         miniTablet:bg-blue-600 miniTablet:text-white miniTablet:border-none miniTablet:p-3.5
         bigPhone:hidden
         phone:hidden
          miniPhone:hidden

         '>
          <a  href="contact"><RiArrowRightUpLine className='text-xl' /></a>
          </button>
        </div>
        <div className='
        tablet:hidden miniTablet:hidden bigPhone:hidden phone:hidden miniPhone:hidden
        '>
            <img className='w-[60rem] h-auto miniDesktop:w-[50rem]' src={person}/>
        </div>
      </div>
       
    </div>
  )
}

export default Head
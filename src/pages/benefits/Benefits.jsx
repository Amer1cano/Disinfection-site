import { useTranslation } from 'react-i18next'
import staff from '/benefits-images/staffs.png'
import true1 from '/benefits-images/true-shield.png'


const Benefits = () => {
   const {t} = useTranslation();
  return (
    <div className="mt-4 p-4" id="benefits">
       <div className='overflow-hidden bg-gradient-to-b from-blue-500 to-cyan-400 rounded-3xl mt-16 gap-12 flex items-center justify-between p-8'>
       <img className='w-2/5
       miniTablet:hidden
       bigPhone:hidden
       phone:hidden
       miniPhone:hidden
       ' src={staff} alt="There is a picture of staff" />
          <div className='w-1/2 
          miniTablet:w-full miniTablet:text-center 
          bigPhone:w-full bigPhone:text-center
          phone:w-full phone:text-center
          miniPhone:w-full miniPhone:text-center
          '>
             <img className='bg-transparent w-32 
             bigTablet:w-28
             tablet:w-20
             miniTablet:w-28 miniTablet:m-auto
             bigPhone:w-28 bigPhone:m-auto
             phone:w-24 phone:m-auto
             miniPhone:w-20 miniPhone:m-auto
             
             ' src={true1} alt="There is a picture of True Shield" />
              <h1 className='text-white text-5xl font-bold font-serif mt-4 
              miniDesktop:text-3xl
               bigTablet:text-2xl
               tablet:text-2xl
               miniTablet:text-3xl
               bigPhone:text-2xl
               phone:text-2xl
               miniPhone:text-xl
               '>
                    {t('Rasmiy kafolat - 1 yil. Biz jismoniy va yuridik shaxslarga xizmat korsatamiz. Xizmatlar litsenziyaga ega!!!')}
             </h1>
              <button
              data-aos="flip-down"
               className="p-2 pl-4 pr-4 mt-6  rounded-lg bg-blue-600 hover:bg-blue-800">
                         <a className="text-2xl text-white font-bold" href="contact">
                            {t('Boglanish')}
                         </a>
              </button>
         </div>
       </div>
       
   
    </div>
  )
}

export default Benefits
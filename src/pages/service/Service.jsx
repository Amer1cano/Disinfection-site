import virus from '/service-images/top-virus.jpg'
import klapa from '/service-images/stop-klapa.jpg'
import mouse from '/service-images/stop-mouse.webp'
import bug from '/service-images/bug.png'
import tarakan1 from '/service-images/tarakan1.jpg'
import chayon2 from '/service-images/chayon2.png'
import mouse2 from '/service-images/mouse2.webp'
import { useTranslation } from 'react-i18next'




const Service = () => {
    const {t} = useTranslation();
  return (
    <div id='service' className="p-4 mt-16 overflow-hidden">
        <div>
            <h1 
            data-aos="flip-right"
             className="text-7xl font-serif font-bold text-black
              bigTablet:text-6xl
              
              miniTablet:text-6xl
              bigPhone:text-5xl
              phone:text-4xl
              miniPhone:text-3xl

              ">{t('Xizmatlar')}</h1>
            <p 
            data-aos="flip-left"
            className="text-xl mt-4  pb-6 text-black
            miniPhone:text-lg">
                {t('Biz sizga samarali va kafolatli xizmat taklif etamiz')}
            </p>

            <div
            data-aos="fade-right"
            data-aos-duration="900"
             className="rounded-lg border-solid border-2 border-slate-400 p-4 mt-8 flex items-center justify-between
             miniTablet:block miniTablet:text-center
             bigPhone:block bigPhone:text-center
             phone:block phone:text-center
             miniPhone:block minPhone:text-center

             ">
                <img className='h-72
                tablet:h-56  
                miniTablet:m-auto miniTablet:h-52
                bigPhone:m-auto bigPhone:h-44
                phone:m-auto phone:h-40  phone:pb-4 
                miniPhone:m-auto miniPhone:h-36 miniPhone:pb-3
                

                ' src={virus}/>
                <div className='w-2/3 
                miniTablet:w-full
                bigPhone:w-full
                phone:w-full
                miniPhone:w-full
                '>
                    <h1 className='text-black font-bold text-4xl 
                    phone:text-2xl
                    miniPhone:text-xl                   
                    '>
                        {t('Dizinfeksiya - zararli mikroorganizmlarni yoq qilish')}
                    </h1>
                    <p className='text-black mt-8 font-medium text-lg 
                    miniPhone:text-base
                    '>
                        {t('Har qanday dizinfeksiyaning asosiy vazifasi infeksiya va kasalliklarga olib kelishi mumkin bolgan xavfli mikroorganizmlarni yoq qilishdir. Dizinfeksiya choralari bosh joyni mogor, virus, chiriyotgan mahsulotlardan va bakteriyalardan tozalaydi. Agar ozingizni yomon his qilsangiz, charchoq yoki sababsiz zaiflashsangiz bizga murojaat qiling.')} 
                    </p>
                </div>

            </div>

            <div
            data-aos="fade-left"
            data-aos-duration="1000"
             className="rounded-lg border-solid border-2 border-slate-400 p-4 mt-8 flex items-center justify-between
             miniTablet:block miniTablet:text-center
             bigPhone:block bigPhone:text-center
             phone:block phone:text-center
             miniPhone:block minPhone:text-center

             ">
                <img className=' h-72
                tablet:h-56  
                miniTablet:m-auto miniTablet:h-52
                bigPhone:m-auto bigPhone:h-44
                phone:m-auto phone:h-40  phone:pb-4
                miniPhone:m-auto miniPhone:h-36 miniPhone:pb-3

                ' src={klapa}/>
                <div className='w-2/3
                miniTablet:w-full
                bigPhone:w-full
                phone:w-full
                miniPhone:w-full
                '>
                    <h1 className='text-black font-bold text-4xl 
                    phone:text-2xl
                    miniPhone:text-xl                   
                    '>
                        {t('Dizinfeksiya - hasharotlarni yoq qilish')}
                    </h1>
                    <p className='text-black mt-8 font-medium text-lg 
                    miniPhone:text-base
                    '>
                    {t('Viloyatda qishloq xojaligi ekinlarini yetishtirishda zararkunanda va hasharotlarga qarshi kurashish bo‘yicha biomahsulotlar ishlab chiqarilishi hamda kimyoviy vositalar zaxirasining yaratilishi, saqlanishi va qo‘llash ishlari ustidan “O‘zagroinspeksiya”ning Toshkent viloyati boshqarmasi hamda tuman bo‘lim inspektorlari tomonidan doimiy nazorat tadbirlari amalga oshirilib, o‘tkazilgan nazorat tadbirlari davomida, yo‘l qo‘yilgan kamchiliklar va qonunbuzilishi holatlari yuzasidan belgilangan tartibda taʼsir choralari qo‘llanilishi va aniqlangan xato-kamchiliklarning bartaraf etilishi taʼminlanmoqda.')}
                    </p>
                </div>

            </div>

            <div
            data-aos="fade-right"
            data-aos-duration="1100"
             className="rounded-lg border-solid border-2 border-slate-400 p-4 mt-8 flex items-center justify-between
             miniTablet:block miniTablet:text-center
             bigPhone:block bigPhone:text-center
             phone:block phone:text-center
             miniPhone:block minPhone:text-center
             
             ">
                <img className=' h-72
                tablet:h-56  
                miniTablet:m-auto miniTablet:h-52
                bigPhone:m-auto bigPhone:h-44
                phone:m-auto phone:h-40 phone:pb-4
                miniPhone:m-auto miniPhone:h-36 miniPhone:pb-3

                ' src={mouse}/>
                <div className='w-2/3
                miniTablet:w-full
                bigPhone:w-full
                phone:w-full
                miniPhone:w-full
                '>
                    <h1 className='text-black font-bold text-4xl 
                    phone:text-2xl
                    miniPhone:text-xl                   
                    '>
                        {t('Deratizatsiya - kemiruvchilarni yoq qilish')}
                    </h1>
                    <p className='text-black mt-8 font-medium text-lg 
                    miniPhone:text-base
                    '>
                    {t('Yuqumli kasalliklarni tarqatadigan hamda xalq xoʻjaligiga iqtisodiy zarar kelti-radigan kemiruvchilarni qirish. Profilaktik va qirib yoʻqotish tadbirlarini oʻz ichiga oladi. Profilaktik tadbirlar zararkunanda kemiruvchilarning uya qurishi, ovqatlanishi hamda koʻpayishiga imkon beradigan sharoitlarni yoʻqotishga, turar joy, xoʻjalik binolarini, goʻsht korxonalari, goʻsht asraladigan muzxonalar, aralash yem korxonalari, elevator, tegirmon, omborxonalarni ular kirishidan himoya qilishga qaratilgan boʻladi')}
                    </p>
                </div>

            </div>


        </div>
        <div className='mt-20'>
            <h1 className='text-7xl font-serif font-bold text-black 
            bigTablet:text-6xl
            bigPhone:text-6xl
            phone:text-5xl
            miniPhone:text-4xl
            
            '>
               {t('Xizmat turi')}
            </h1>
            <div className='grid grid-cols-2 gap-6
            miniTablet:grid-cols-1
            bigPhone:grid-cols-1
            phone:grid-cols-1
            miniPhone:grid-cols-1
            '>
                <div
                data-aos="fade-down"
                data-aos-duration="800"
                 className='p-6 mt-16 bg-[#F3F6F6] rounded-lg'>

                    <h1 className='text-4xl font-bold font-serif'>
                        {t('Klapalar')}
                    </h1>
                    <p className='text-xl text-gray-700 font-medium mt-4 mb-8 
                    miniPhone:text-lg
                    '>
                    {t('Klapalar bilan qiziquvchilar va ulardan qutulish yo‘lini qidirayotganlar ko‘paymoqda. Chunki klapalar insonlarni uzoq vaqt chaqib, ularda noqulayliklar va terida turli xil allergik qichimalarni keltirib chiqaradi. Klapalar nafaqat eski uylarda, balki yangi uylarda, hovlilarda, umuman, mebel va inson qoni bor bo‘lgan barcha joylarda yashashi mumkin...')}
                    </p>
                    <div className='flex items-center justify-between'>
                    <button className="p-2 pl-4 pr-4 mt-16 rounded-lg bg-blue-600 hover:bg-blue-800">
                         <a className="text-2xl text-white font-bold
                         phone:text-xl phone:p-1
                         miniPhone:text-lg miniPhone:p-0
                         " href="contact">
                            {t('Boglanish')}
                         </a>
                      </button>
                      <img className='bg-transparent rounded-full 
                      tablet:w-36   
                      bigPhone:w-28 
                      phone:w-20   phone:mt-10
                      miniPhone:w-20  miniPhone:mt-10
                      ' src={bug}/>
                    </div>
                </div>

                <div
                data-aos="fade-up"
                data-aos-duration="800"
                 className='p-6 mt-16 bg-[#F3F6F6] rounded-lg'>
                    <h1 className='text-4xl font-bold font-serif
                    phone:text-3xl
                    miniPhone:text-2xl
                    '>
                        {t('Tarakanlar')}
                    </h1>
                    <p className='text-xl text-gray-700 font-medium mt-4 mb-8 
                    miniPhone:text-lg
                    '>
                    {t('Turkiston tarakanini birinchi marta 1978-yilda AQShda, Kaliforniyadagi sobiq Sharp armiyasi ombori atrofida payqashgan, kop otmay Texasdagi Fort Blissda va boshqa bir qancha harbiy bazalarda paydo bolgan.Tadqiqotchilarning fikricha, tur Markaziy Osiyodan, ehtimol Afgonistondan qaytgan harbiy texnikada kelgan...')}
                    </p>
                    <div className='flex items-center justify-between'>
                    <button className="p-2 pl-4 pr-4 mt-16 rounded-lg bg-blue-600 hover:bg-blue-800">
                         <a className="text-2xl text-white font-bold
                         
                         phone:text-xl phone:p-1
                         miniPhone:text-lg miniPhone:p-0
                         " href="contact">
                            {t('Boglanish')}
                         </a>
                      </button>
                      <img className='w-48 h-48 rounded-full
                      tablet:w-36 tablet:h-36  
                      bigPhone:w-28 bigPhone:h-28
                      phone:w-20 phone:h-20  phone:mt-10
                      miniPhone:w-20 miniPhone:h-20 miniPhone:mt-10
                      ' src={tarakan1}/>
                    </div>
                </div>

                <div
                data-aos="fade-right"
                data-aos-duration="900"
                 className='p-6 mt-16 bg-[#F3F6F6] rounded-lg'>
                    <h1 className='text-4xl font-bold font-serif
                    phone:text-3xl
                    miniPhone:text-2xl
                    '>
                        {t('Chayon')}

                    </h1>
                    <p className='text-xl text-gray-700 font-medium mt-4 mb-8 
                    miniPhone:text-lg
                    '>
                    {t('Chayon chaqishi — kishi hayoti uchun xavfli holat. Chayon chaqqan joyda kuchli ogriq seziladi, keyinchalik u qon tomirlari va nerv tolalari orqali butun tanaga tarqaladi. Osha joy qizib, bazan muzlab jonsizlanadi, qichishadi, qizarib shishadi, goho unda pufakchalar paydo boladi; kishi holsizlanadi, boshi aylanadi va ogriydi, eti uvishadi. Ogirroq hollarda tomir tortishib, nafas olish, gapirish qiyinlashadi.')}
                    </p>
                    <div className='flex items-center justify-between'>
                    <button className="p-2 pl-4 pr-4 mt-16 rounded-lg bg-blue-600 hover:bg-blue-800">
                         <a className="text-2xl text-white font-bold
                         phone:text-xl phone:p-1
                         miniPhone:text-lg miniPhone:p-0
                         " href="contact">
                            {t('Boglanish')}
                         </a>
                      </button>
                      <img className='rounded-full h-48 w-48 
                      tablet:w-36 tablet:h-36  
                      bigPhone:w-28 bigPhone:h-28
                      phone:w-20 phone:h-20  phone:mt-10
                      miniPhone:w-20 miniPhone:h-20 miniPhone:mt-10
                      ' src={chayon2}/>
                    </div>
                </div>

                <div
                data-aos="fade-left"
                data-aos-duration="1000"
                 className='p-6 mt-16 bg-[#F3F6F6] rounded-lg'>
                    <h1 className='text-4xl font-bold font-serif
                    phone:text-3xl
                    miniPhone:text-2xl
                    '>
                        {t('Kemiruvchilar')}
                    </h1>
                    <p className='text-xl text-gray-700 font-medium mt-4 mb-8 
                    miniPhone:text-lg
                    '>
                    {t('Kemiruvchilar - sut emizuvchilar sinfiga mansub hayvonlar turkumi. 1600, baʼzi maʼlumotlarga koʻra 2000 ga yaqin turi maʼlum. Koʻpchilik K.ning oyogʻida yer kavlashga moslashgan tirnoqlari bor. Boshi uzunchoq, tepasi yassi. Koʻzi turtib chiqqan, baʼzilarida esa rivojlanmagan (mas, koʻrsichqonlarda). Labida qilsimon moʻylovi bor.  K.ning koʻpchiligi qishloq xoʻjaligi zararkunandasidir')}
                    </p>
                    <div className='flex items-center justify-between'>
                    <button className="p-2 pl-4 pr-4 mt-16 rounded-lg bg-blue-600 hover:bg-blue-800">
                         <a className="text-2xl text-white font-bold
                         
                         phone:text-xl phone:p-1
                         miniPhone:text-lg miniPhone:p-0
                         " href="contact">
                            {t('Boglanish')}
                         </a>
                      </button>
                      <img className='rounded-full w-48 h-48
                      tablet:w-36 tablet:h-36  
                      bigPhone:w-28 bigPhone:h-28
                      phone:w-20 phone:h-20  phone:mt-10
                      miniPhone:w-20 miniPhone:h-20 miniPhone:mt-10
                      ' src={mouse2}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service
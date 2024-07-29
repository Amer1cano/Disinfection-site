import { useTranslation } from 'react-i18next'
import '../../index.css'
import FAQSlider from './FAQSlider'

const Faq = () => {
  const {t} = useTranslation();
   const faqs = [
    { question: 
        t('Zararkunandalarni yoq qilish qanday amalga oshiriladi?'), 
        answer:
         t('Maxsus asbob-uskunalar yordamida insektitsidlar aerozolli tumanga aylanadi  va devor qogozi, devorlar va taxta plitalari orasidagi eng kichik boshliqlarga, kozga korinmas hasharotlar uchun potensial yashirish joylariga kiradi.') },
  { question:
     t('Siz foydalanadigan dorilar xavflimi?'), 
     answer: 
     t('Preparatlar odamlar, uy hayvonlari va osimliklar uchun xavfli emas. Ammo davolanishdan keyin xonani 40 daqiqa davomida ventilyatsiya qilish kerak') },
  { question: 
    t('Men uyimni dizinfeksiyaga tayyorlash uchun nima qilishim kerak?'), 
    answer:
     t('Asosan, idish-tovoq va shaxsiy gigiyena vositalarini izolyatsiya qilishingiz kerak. Davolash paytida uy hayvonlari ham izolyatsiya qilinishi kerak. Mebel yoki maishiy-texnikani kochirishga xojay yoq.') },
   ]
  return (
    <div className="mt-16 p-4 overflow-hidden" id="faq">
        <hr className="bg-gray-500" />
        <header className="App-header mt-12">
            <h1
            data-aos="zoom-in-down"
             className="text-5xl font-bold font-serif text-black
             phone:text-4xl
             miniPhone:text-4xl
             ">
                {t('FAQ')}
            </h1>
            <FAQSlider faqs={faqs} />
        </header>

    </div>
  )
}

export default Faq
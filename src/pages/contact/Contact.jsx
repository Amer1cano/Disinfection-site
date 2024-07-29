/* eslint-disable no-unused-vars */
import axios from 'axios';
import person from '/contact-images/person.png'
import { useTranslation } from 'react-i18next';
import Toast, { showToast } from './Toast';


const Contact = () => {
    const {t} = useTranslation();
    const sendMessages = (event) =>{
        event.preventDefault();
        const token = "7351843819:AAG3gqJoZnDIRO9Ur3B2WqKYO5UQtN0lbyQ";
        const chat_id =  1768611600;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const name = document.getElementById("name").value;
        const telefon = document.getElementById("tel").value;
        const MessageFull = `Ismi: ${name} \nTelefoni: ${telefon} `
        axios({
            url:url,
            method:'POST',
            data:{
                "chat_id":chat_id,
                "text":MessageFull
            }
        }).then((res)=>{
            document.getElementById("myForm").reset();
            // alert("Mufavvaqiyatli yuborildi")
            if(res){
                showToast('Login successful!', 'success');
            }
        }).catch((error)=>{
            showToast('Login failed!', error);
        })
    }
  return (  
    
    <div className="p-4 " id='contact'>
        <Toast/>
        <div className="flex items-center justify-around rounded-lg p-4 bg-gradient-to-b from-blue-500 to-cyan-400 mt-16
        tablet:px-36
        miniTablet:px-24
        bigPhone:px-12
        phone:px-4
        miniPhone:px-2
        "> 
            <div className="bg-white w-1/3 rounded-2xl grid grid-cols-1 gap-8 p-8 mt-8 mb-8 
            bigTablet:mb-2
            tablet:w-full tablet:px-8
            miniTablet:w-full miniTablet:px-8
            bigPhone:w-full bigPhone:px-6
            phone:w-full phone:px-4
            miniPhone:w-full miniPhone:px-4

            ">
                <h1
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="600"
                 className="text-black font-bold text-4xl
                  bigTablet:text-3xl
                  miniTablet:text-3xl
                  bigPhone:text-3xl
                  phone:text-2xl
                  miniPhone:text-2xl
                  ">
                    {t('Malumotingizni qoldiring')}
                </h1>
                <form id='myForm' onSubmit={sendMessages} className='grid grid-cols-1 gap-8'>
                <input
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="750"
                 required id='name' className="bg-gray-300 rounded-xl p-4 placeholder:text-black text-lg outline-none" type="text" placeholder={t('Ismingiz')} />
                <input
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="900"
                 required id='tel' className="bg-gray-300 rounded-xl p-4 placeholder:text-black text-lg outline-none" type="tel" placeholder="+998906768224" />
                <button
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
                 type='submit' className="bg-black text-white text-2xl font-bold p-3 rounded-lg hover:bg-red-950">{t('Yuborish')}</button>
                </form>
            </div>
            <img src={person} alt="There is a picture of a person" className='
            tablet:hidden
            miniTablet:hidden
            bigPhone:hidden
            phone:hidden
            miniPhone:hidden
            ' />
        </div>
    </div>
        
     
  )
}

export default Contact
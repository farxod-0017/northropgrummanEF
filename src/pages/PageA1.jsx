import React from 'react'
import '../styles/page1.css'

function Page1() {
    return (
        <div>
            <section className='page1'>
                <div className="page1_wrap">
                    <div className="left_text">
                        <h2>O‘zbekiston Respublikasining axborot texnologiyalari va kommunikatsiyalari sohasida faoliyat yurituvchi muassasa. O‘zbekistonning axborot kommunikatsiya texnologiyalarini rivojlantirish, elektron hukumat tizimlarini joriy etish, shuningdek, internet va boshqa kommunikatsiya xizmatlarini taqdim etishdir. Quyida kompaniya haqida umumiy statistik ma'lumotlar:</h2>
                        <h2>UzInfoCom 2003-yilda tashkil etilgan.</h2>
                        <h2>Bosh ofis: O‘zbekiston, Toshkent shahar, Yakkasaroy tumani, Ozodbek ko‘chasi, 1-uy</h2>
                        <h2>Xodimlar soni: UzInfoComda taxminan 200-300 nafar xodim ishlaydi.</h2>
                        <h2>Faoliyat sohasi:

                            <br />  - Axborot Texnologiyalari
                            <br />  - Internet Xizmatlari
                            <br />  -  Elektron Hukumat</h2>
                        <h2>Asosiy loyihalar:

                            <br /> - Davlat xizmatlarini raqamlashtirish va fuqarolar uchun qulay elektron xizmatlarni taqdim etish.
                            <br /> - O‘zbekistonning ma'lumotlar markazlari va bulutli xizmatlar infratuzilmasini rivojlantirish.
                            <br /> - Axborot xavfsizligini ta'minlash uchun zamonaviy texnologiyalar va yechimlar ishlab chiqish.</h2>
                    </div>
                    <div style={{marginRight:'40px'}}>
                        
                        <iframe width={600} height={400} title='map'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45598.1022282599!2d69.20228393150968!3d41.28206850594194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a8b2eef294b%3A0x74d629c3b43f5834!2sYakkasaray%20District%2C%20Tashkent%2C%20Uzbekistan!5e1!3m2!1sen!2s!4v1728970687663!5m2!1sen!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    {/* <img style={{display:'block'}} src="https://th.bing.com/th/id/OIP.VbZiJPJ-iTaJbJZLfvbrNgAAAA?rs=1&pid=ImgDetMain" alt="" /> */}
                </div>
            </section>
        </div>
    )
}

export default Page1
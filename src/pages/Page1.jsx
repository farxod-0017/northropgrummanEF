import React from 'react'
import '../styles/page1.css'

function Page1() {
    return (
        <div>
            <section className='page1'>
                <div className="page1_wrap">
                    <div className="left_text">
                        <h2>Northrop Grumman Corporation — bu AQShning aerokosmik va mudofaa sanoatida yetakchi kompaniyalardan biri bo'lib, dunyoning eng yirik mudofaa pudratchilari qatoriga kiradi. Quyida kompaniya haqida umumiy statistik ma'lumotlar:</h2>
                        <h2>Tashkil etilgan yili: 1939-yil (Northrop Aircraft, Inc. nomi bilan).</h2>
                        <h2>Bosh ofis: Virjiniya shtati, AQSh.</h2>
                        <h2>Xodimlar soni: Taxminan 95,000 (2024-yil holatiga ko'ra).</h2>
                        <h2>Yillik daromad: 2023-yilda $38.2 milliard atrofida.</h2>
                        <h2>Faoliyat sohasi:

                            <br />   - Aerokosmik texnologiyalar (harbiy va tijorat samolyotlar, kosmik apparatlar).
                            <br />  - Mudofaa tizimlari va yechimlar (qurollar, radarlar, kiberxavfsizlik).
                            <br />  -  Axborot va tahliliy xizmatlar (raqamli tizimlar va kiberxavfsizlik xizmatlari).</h2>
                        <h2>Asosiy loyihalar:

                            <br /> - B-21 Raider: Harbiy bombardimonchi samolyoti.
                            <br /> - F-35 Lightning II: Ko'p funktsiyali qiruvchi samolyot.
                            <br /> - James Webb Space Telescope: Kosmik teleskop loyihasi.</h2>
                    </div>
                    <div style={{marginRight:'40px'}}>
                        <iframe width={600} height={400} title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202375.317507899!2d-82.51837013498223!3d37.58335735130183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884cd670bdbcb2cd%3A0xc04e4149b746a695!2sVirginia%2C%20USA!5e1!3m2!1sen!2s!4v1727932605026!5m2!1sen!2s"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    {/* <img style={{display:'block'}} src="https://th.bing.com/th/id/OIP.VbZiJPJ-iTaJbJZLfvbrNgAAAA?rs=1&pid=ImgDetMain" alt="" /> */}
                </div>
            </section>
        </div>
    )
}

export default Page1
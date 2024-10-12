import React from 'react'
import subs from '../comonents/subsNG.png'

function Page6() {
  return (
    <div>
        <section className='page4 page6'>
        <div className="page4_wrap">
          <div className="left_text">
            <h2>Ish soatlari grafigi</h2>
            <h2>Northrop Grumman ko‘p hollarda to‘liq vaqtli ishlarni taklif qiladi, ya'ni 40 soatlik ish haftasi me'yor sifatida qabul qilinadi. Ba'zi maxsus loyihalar va mudofaa sohasidagi ishlar kechiktirilmasligini ta'minlash uchun ba'zida qo‘shimcha soatlar yoki smenali ish rejimlari ham mavjud bo‘lishi mumkin. Qo'shimcha ishlar uchun xodimlar odatda qo'shimcha to'lov yoki bonuslar oladi.</h2>
            <h2>Maoshlar geografik joylashuvga, malaka va tajribaga qarab farq qilishi ham mumkin. Misol uchun, Kaliforniyada joylashgan xodimlar narxlari yuqori bo'lganligi sababli boshqa shtatlarga qaraganda ko‘proq maosh olishi mumkin.</h2>
            <h2>Kompaniya ba'zi bo‘limlarda moslashuvchan ish soatlarini joriy etgan. Bu xodimlarga o‘z jadvalini moslashtirish imkonini beradi, masalan, 4/10 jadvali, bu degani, xodimlar haftaning to‘rt kunida 10 soat ishlaydi va keyin uch kun dam oladi. </h2>
            <h2>Qo‘shimcha soatlar ("overtime") ishlagan xodimlar qo‘shimcha to‘lov oladi. AQShda, mehnat qonunchiligiga ko‘ra, 40 soatdan ortiq ishlagan xodimlar odatda har bir ortiqcha soat uchun o‘z odatiy stavkasidan 1.5 baravar ko‘p maosh oladi.</h2>
          </div>
          <div className="right_img">
            <img src="https://th.bing.com/th/id/OIP.b98LnBF4ql3R1V1gEoqu7AHaD3?rs=1&pid=ImgDetMain" alt="" />
            <img src="https://th.bing.com/th/id/R.025f44802350adf48cb7275f2bc2cfa9?rik=8tD5gUuKDZ%2bNjA&pid=ImgRaw&r=0" alt="" />
            <img src={subs} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page6
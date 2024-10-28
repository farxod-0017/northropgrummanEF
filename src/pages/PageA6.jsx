import React from 'react'
import subs from '../comonents/subsNG.png'

function Page6() {
  return (
    <div>
        <section style={{backgroundImage:`url('https://th.bing.com/th/id/OIP.zq3ygM1V58AplR0ot9qYpwHaE8?w=499&h=333&rs=1&pid=ImgDetMain')`}} className='page4 page6'>
        <div className="page4_wrap">
          <div className="left_text">
            <h2>Ish soatlari grafigi</h2>
            <h2>UzInfoCom ko‘p hollarda to‘liq vaqtli ishlarni taklif qiladi, ya'ni 40 soatlik ish haftasi me'yor sifatida qabul qilinadi. Ba'zi maxsus loyihalar va davlat buyurmalari kechiktirilmasligini ta'minlash uchun ba'zida qo‘shimcha soatlar yoki smenali ish rejimlari ham mavjud bo‘lishi mumkin. Qo'shimcha ishlar uchun xodimlar odatda qo'shimcha to'lov yoki bonuslar oladi.</h2>
            <h2>Qo'shimcha ish soatiga ortiqcha  har soatiga odatdagidan 1.5-2(tungi smena:22:00 dan 6:00 yoki rasmiy bayram sanalarida farq qiladi) baravar ko'p to'laydi. </h2>
            <h2>Kompaniya ba'zi bo‘limlarda moslashuvchan ish soatlarini joriy etgan. Bu xodimlarga o‘z jadvalini moslashtirish imkonini beradi, masalan, 4/10 jadvali, bu degani, xodimlar haftaning to‘rt kunida 10 soat ishlaydi va keyin uch kun dam oladi. </h2>
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
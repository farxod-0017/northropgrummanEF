import React from 'react'
import '../styles/home.css'

function HomePage() {
    return (
        <div>
            <section className='home'>
                <div className="video_home">
                    <img className='back_comp' src="https://th.bing.com/th/id/R.5da04f8387ab1bea3f9f11296902c6d2?rik=62OJAnAf%2fnsgwQ&riu=http%3a%2f%2fcdn.ebaumsworld.com%2fmediaFiles%2fpicture%2f2431313%2f85084531.gif&ehk=7iagHutcnMocL2sUROJFnW5UxbZgM9NCnqeHWnNyqMQ%3d&risl=&pid=ImgRaw&r=0" alt="" />

                </div>

                <h1>Taqdimot </h1>
                <h2>Mavzu: Northrop Grumman (Korporativ Boshqaruv).</h2>
                <h3 className='show_text'>Muallif: Farxod Egamnazarov</h3>
                <h3 className='centerText show_text'>Korporativ Boshqaruv <br /> fani uchun tayyorlandi</h3>
            </section>
        </div>
    )
}

export default HomePage
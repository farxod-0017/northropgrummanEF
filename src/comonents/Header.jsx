import React, { useState } from "react";
import '../styles/head.css'
import { useNavigate } from "react-router-dom";

function Header() {
    const [page, setPage] = useState(0); // Dastlabki sahifa raqami
    const navigate = useNavigate(); // useNavigate ishlatiladi

    const goToNextPage = () => {
        if (page === 0) {
            const nextPage = page + 1;
            setPage(nextPage);
            navigate('/1');
        } else if (page > 0 && page<16) {
            const nextPage = page + 1;
            setPage(nextPage);
            navigate(`/${nextPage}`); // URLni /2, /3 ga o'zgartirish
        } else if(page === 16) {
            navigate('/16')
        }

    };

    const goToPrevPage = () => {
        if (page > 1) {
            const prevPage = page - 1;
            setPage(prevPage);
            navigate(`/${prevPage}`); // URLni orqaga olib borish
        } else if (page === 1) {
            const prevPage = page - 1;
            setPage(prevPage)
            navigate('/');
        } else if (page === 0) {
            navigate("/");
        }
    };
    return (
        <div>
            <div>
                <button className="nav_btn prev_btn" onClick={goToPrevPage}>Prev</button>
                <button className="nav_btn" onClick={goToNextPage}>Next</button>
            </div>
        </div>
    )
}

export default Header
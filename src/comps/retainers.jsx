import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import { retainers } from "../utils/constants"

const RetainersComp = () => {
const [compMounted, setCompMounted] = useState(false)
const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

useEffect(() => {
    function handleResize() {
        setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    if (isMobile) return;

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, [isMobile])

useEffect(() => {
    const handleMouseEnter = (event) => {
        const card = event.currentTarget;
        card.style.backdropFilter = 'blur(10px)';
        card.style.backgroundImage = 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.0) 50%)';
        
        const cards = document.querySelectorAll('.retainer-card');
        cards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.style.backdropFilter = 'blur(10px)';
                otherCard.style.opacity = '0.3';
            }
        });
    };

    const handleMouseLeave = (event) => {
        const card = event.currentTarget;
        card.style.backgroundImage = 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.0) 50%)';

        const cards = document.querySelectorAll('.retainer-card');
        cards.forEach(otherCard => {
            otherCard.style.opacity = '1';
        });
    };

    const cards = document.querySelectorAll('.retainer-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    });

    // Return a cleanup function to remove event listeners
    return () => {
        cards.forEach(card => {
            card.removeEventListener('mouseenter', handleMouseEnter);
            card.removeEventListener('mouseleave', handleMouseLeave);
        });
    };
}, []);

const MobileComp = () => {
    return <div className="row d-flex justify-content-center">
        <div className="col-11">
        <Swiper slidesPerView={'1'} pagination={{clickable: true,}}
            modules={[Pagination]} className="mySwiper">
            {retainers.map((_x, _index) => 
                <SwiperSlide key={_index}>
                    <div className="retainer-card">
                        <h3 className="card-title">{_x['title']}</h3>
                        <h5 className="opacity-75 card-sub-title">{_x['sub_title']}</h5>
                        <p className="opacity-50 card-sub-title">{_x['description']}</p>
                        <span className="fs-5 card-title">{_x['amount']}</span>
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
        </div>
    </div>
}

const NonMobileComp = () => {
    return (
        <>
        {retainers.map((_x, _index) => 
            <div className="col-12 col-md-6 col-lg-6 p-4" key={_index}>
                <div className="retainer-card">
                    <h3 className="card-title">{_x['title']}</h3>
                    <h5 className="opacity-75 card-sub-title">{_x['sub_title']}</h5>
                    <p className="opacity-50 card-sub-title">{_x['description']}</p>
                    <span className="fs-5 card-title">{_x['amount']}</span>
                </div>
            </div>
        )}
        </>
    )
}

return <>
<div className="row">
    <h2 className="text-white text-center page-tit" id="packages">Packages</h2>
    {isMobile?
        <MobileComp/>
    :
        <NonMobileComp/>
    }
</div>
</>
}

export default RetainersComp
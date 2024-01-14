import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { addons } from "../utils/constants"

const AddonsComp = () => {
const [compMounted, setCompMounted] = useState(false)
const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

useEffect(() => {
    function handleResize() {
        setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

useEffect(() => {
    const handleMouseEnter = (event) => {
        const card = event.currentTarget;
        card.style.backdropFilter = 'blur(10px)';
        card.style.backgroundImage = 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.0) 50%)';
        
        const cards = document.querySelectorAll('.addons-card');
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

        const cards = document.querySelectorAll('.addons-card');
        cards.forEach(otherCard => {
            otherCard.style.opacity = '1';
        });
    };

    const cards = document.querySelectorAll('.addons-card');
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
            modules={[Pagination]}className="mySwiper">
            {addons.map((_x, _index) => 
                <SwiperSlide key={_index}>
                    <div className="addons-card">
                        <h4>{_x['title']}</h4>
                        <h6><span className="opacity-75">{_x['sub_title']}</span> | <span>{_x['amount']}</span></h6>
                        <small className="opacity-50">{_x['description']}</small>
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
        {addons.map((_x, _index) => 
            <div className="col-lg-3 col-md-6 col-sm-12 p-2" key={_index}>
                <div className="addons-card">
                    <h4>{_x['title']}</h4>
                    <h6><span className="opacity-75">{_x['sub_title']}</span> | <span>{_x['amount']}</span></h6>
                    <small className="opacity-50">{_x['description']}</small>
                </div>
            </div>
        )}
        </>
    )
}

return <>
<div className="row d-flex justify-content-center">
    <h4 className="text-white text-center" id="addons">Addons</h4>
    {isMobile?
        <MobileComp/>
    :
        <NonMobileComp/>
    }
</div>
</>
}

export default AddonsComp
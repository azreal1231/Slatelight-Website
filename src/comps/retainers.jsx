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
    if(!compMounted){
        setCompMounted(true)
        doRetainerThing()
    }
}, [compMounted])

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

function doRetainerThing(){
    const cards = document.querySelectorAll('.retainer-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
        // Increase the blur of the hovered card
        this.style.backdropFilter = 'blur(10px)';
        this.style.backgroundImage = 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.0) 50%)';

    
        // Reset the blur of all other cards
        cards.forEach(otherCard => {
            if (otherCard !== this) {
            otherCard.style.backdropFilter = 'blur(10px)';
            otherCard.style.opacity = '0.3';
            }
        });
        });
    
        card.addEventListener('mouseleave', function() {
        // Reset the gradient and opacity when the mouse leaves the card
        this.style.backgroundImage = 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.0) 50%)';
        cards.forEach(otherCard => {
            otherCard.style.opacity = '1';
        });
        });
    });
}

const MobileComp = () => {
    return <div className="row d-flex justify-content-center">
        <div className="col-11">
        <Swiper slidesPerView={'1'} pagination={{clickable: true,}}
            modules={[Pagination]}className="mySwiper">
            {retainers.map((_x, _index) => 
                <SwiperSlide key={_index}>
                    <div className="retainer-card">
                        <h3>{_x['title']}</h3>
                        <h5><span className="opacity-75">{_x['sub_title']}</span> | <span>{_x['amount']}</span></h5>
                        <p className="opacity-50">{_x['description']}</p>
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
                    <h3>{_x['title']}</h3>
                    <h5><span className="opacity-75">{_x['sub_title']}</span> | <span>{_x['amount']}</span></h5>
                    <p className="opacity-50">{_x['description']}</p>
                </div>
            </div>
        )}
        </>
    )
}

return <>
<div className="row">
    <h2 className="text-white text-center" id="packages">Packages</h2>
    {isMobile?
        <MobileComp/>
    :
        <NonMobileComp/>
    }
</div>
</>
}

export default RetainersComp
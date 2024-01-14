import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { partners } from "../utils/constants"

const PartnersComp = () => {
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

const MobileComp = () => {
    return <div className="row d-flex justify-content-center">
        <div className="col-11">
        <Swiper slidesPerView={'1'} pagination={{clickable: true,}}
            modules={[Pagination]}className="mySwiper">
            {partners.map((_x, _index) => 
                <SwiperSlide key={_index}>
                    <div className="normal-card">
                        <div className="image-container">
                            <img src={_x['logo_url']} className="size-50" alt="" />
                        </div>
                        <small className="opacity-75 text-center">{_x['description']}</small>
                    </div>
                </SwiperSlide>            
            )}
        </Swiper>
        </div>
    </div>
}

const NonMobileComp = () => {
    return (
        <div className="row d-flex justify-content-center">
        {partners.map((_x, _index) => 
            <div className="col-lg-3 col-md-6 col-sm-12 p-2" key={_index}>
                <div className="text-white normal-card">
                    <img src={_x['logo_url']} className="size-70" alt="" />
                    <small className="opacity-50 text-center">{_x['description']}</small>
                </div>
            </div>
        )}
        </div>
    )
}

return <div id="partners">
    <h2 className="text-center text-white">Partners</h2>
    {isMobile?
        <MobileComp/>
    :
        <NonMobileComp/>
    }
</div>
}

export default PartnersComp
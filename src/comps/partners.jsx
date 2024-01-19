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
            <div className="col-lg-4 col-md-6 col-sm-12 p-2" key={_index}>
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
    {/* <h2 className="text-center text-white page-tit">Partners</h2> */}
    {/* {isMobile?
        <MobileComp/>
    :
        <NonMobileComp/>
    } */}
    <div className="row d-flex justify-content-center">
        <div className="col-10">
            {/* <p className="partner-txt">
                Partnered with 
                <img src={partners[0]['logo_url']} alt="" srcset="" height={45} />
                Slatelight has been collaborating with 
                <a href="https://trinityweb.online/" className="text-transform-none" target="_blank" rel="noopener noreferrer"><b className="text-white">&nbsp;TrinityWeb&nbsp;</b></a>
                for the past four years in a highly successful partnership within the software development sector. 
                TrinityWeb, known for its extensive range of software development support, has significantly enriched their joint projects. 
            </p> */}
            <h3 className="partner-heading text-center mb-0 pb-0">
                <span className="opacity-75">Partnered with </span>
                <img src={partners[0]['logo_url']} alt="" srcset="" height={45} />
            </h3>
            <p className="partner-txt">
                In our four-year partnership with <b>TrinityWeb</b>, 
                Slatelight has significantly advanced in the software development sector. 
                <b>TrinityWeb</b> 's diverse IT services, encompassing SEO, marketing, and mobile development, 
                have enriched our joint projects, creating a robust and dynamic collaboration. 
                Their extensive support has been pivotal in enhancing our ventures, illustrating the power of combined expertise.
            </p>
        </div>
    </div>
</div>
}

export default PartnersComp
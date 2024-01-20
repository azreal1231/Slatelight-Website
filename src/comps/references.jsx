import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { references } from "../utils/constants"

const ReferencesComp = () => {
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
        <Swiper 
        slidesPerView={1}
        spaceBetween={0}
        navigation={true}  pagination={{clickable: true,}}
        modules={[Pagination]} className="mySwiper">
            {references.map((_x, _index) => 
                <SwiperSlide key={_index}>
                    <div className="reference-card">
                        <img height={25} src={_x['company_logo_url']} alt="" className='' />
                        <p className="reference-card-summery">{_x['summery']}</p>
                        <span className="fs-5">{_x['person']} | {_x['position']}</span>
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
        </div>
    </div>
}

const DesktopComp = () => {
    return <div className="row d-flex justify-content-center">
        <div className="col-11">
        <Swiper 
        slidesPerView={3}
        spaceBetween={30}
        pagination={{clickable: true,}}
        modules={[Pagination]} className="mySwiper">
            {references.map((_x, _index) => 
                <SwiperSlide key={_index}>
                    <div className="reference-card">
                        <img height={28} src={_x['company_logo_url']} alt="" className='' />
                        {/* <h3 className="card-title">{_x['company_name']}</h3> */}
                        {/* <h5 className="opacity-75 card-sub-title">{_x['sub_title']}</h5> */}
                        <p className="reference-card-summery">{_x['summery']}</p>
                        <span className="fs-5">{_x['person']} | {_x['position']}</span>
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
        </div>
    </div>
}

return <div id="references">
    <div className="row">
        <h2 className="text-center text-white page-tit">References</h2>
        {isMobile?
            <MobileComp/>
        :
            <DesktopComp/>
        }
    </div>
</div>
}

export default ReferencesComp
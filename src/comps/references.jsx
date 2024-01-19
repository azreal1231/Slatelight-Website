import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { retainers } from "../utils/constants"

const ReferencesComp = () => {

const MobileComp = () => {
    return <div className="row d-flex justify-content-center">
        <div className="col-11">
        <Swiper 
        slidesPerView={3}
        spaceBetween={30}
        navigation={true} modules={[Navigation]} className="mySwiper">
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

return <div id="references">
    <div className="row">
        <h2 className="text-center text-white page-tit">References</h2>
        <MobileComp/>
    </div>
</div>
}

export default ReferencesComp
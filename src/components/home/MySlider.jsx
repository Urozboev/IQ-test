import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

function MySlider({ children, slidesNumber, style, rout }) {
    const navigate = useNavigate()
    return (
        <div style={style} className="my-slider">
            <Swiper
                loop={true}
                spaceBetween={10}
                centeredSlides={false}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false
                }}
                slidesPerView={1}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: slidesNumber,
                    }
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {children.map((el, ind) => {
                    return <SwiperSlide
                        onClick={() => navigate(rout)}
                        key={ind}
                    >
                        {el}
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    );
}

export default MySlider

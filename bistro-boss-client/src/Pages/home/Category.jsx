import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../Components/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeading={"From 11.00am to 10.00pm"}
            heading={"Order Online"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <p className='text-3xl uppercase ml-8 -mt-20 text-white'>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <p className='text-3xl uppercase ml-8 -mt-20 text-white'>Pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <p className='text-3xl uppercase ml-8 -mt-20 text-white'>Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <p className='text-3xl uppercase ml-8 -mt-20 text-white'>Desserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <p className='text-3xl uppercase ml-8 -mt-20 text-white'>Salad</p>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;
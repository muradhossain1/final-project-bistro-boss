import SectionTitle from "../../Components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://bistro-boss-server-pro.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <section>
                <SectionTitle heading='Testimonials' subHeading='What our client say'></SectionTitle>
            </section>
            <div >
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="mx-24 mt-4 flex flex-col justify-center space-y-4 items-center">
                                <Rating style={{maxWidth: 180}} value={review.rating} readOnly></Rating>
                                <p>{review.details}</p>
                                <h2 className="text-2xl text-orange-400">{review.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
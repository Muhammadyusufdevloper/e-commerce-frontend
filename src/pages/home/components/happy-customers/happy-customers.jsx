import { memo, useRef, useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "./happy-customers.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { comments } from "../../../../assets/data/data";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";

const HappyCustomers = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        const updateNavigation = (swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        };

        const swiperInit = () => {
            const swiperInstance = document.querySelector('.mySwiper')?.swiper;
            if (swiperInstance) {
                updateNavigation(swiperInstance);
            }
        };

        swiperInit();
    }, []);

    return (
        <section className="happy-customers">
            <div className="happy-customers__wrapper">
                <div className="happy-customers__top-box container">
                    <h2 className="happy-customers__title">OUR HAPPY CUSTOMERS</h2>
                    <div className="happy-customers__buttons">
                        <button ref={prevRef} className="happy-customers__button" aria-label="Previous"><GoArrowLeft /></button>
                        <button ref={nextRef} className="happy-customers__button" aria-label="Next"><GoArrowRight /></button>
                    </div>
                </div>
                <div className="happy-customers__bottom-box">
                    <div className="container">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={5}
                            loop={true}
                            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                            breakpoints={{
                                '@0.00': { slidesPerView: 1, spaceBetween: 5 },
                                '@0.75': { slidesPerView: 2, spaceBetween: 10 },
                                '@0.85': { slidesPerView: 2, spaceBetween: 20 },
                                '@1.00': { slidesPerView: 3, spaceBetween: 40 },
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {comments.map(({ id, firstName, lastName, description }) => (
                                <SwiperSlide key={id}>
                                    <div className="happy-customers__card">
                                        <div className="happy-customers__card-star">
                                            {Array.from({ length: 5 }, (_, index) => (
                                                <MdOutlineStarPurple500 key={index} />
                                            ))}
                                        </div>
                                        <div className="happy-customers__card-context">
                                            <h3 className="happy-customers__card-title">{`${firstName} ${lastName}`}</h3>
                                            <IoIosCheckmarkCircle />
                                        </div>
                                        <p className="happy-customers__card-text">{description}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(HappyCustomers);

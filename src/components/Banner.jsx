import React from "react";
import banner1 from "../img/BannerSale1.png";
import banner2 from "../img/BannerSale1.png";
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="text-center">
                <motion.h1
                 initial={{scale: 0}}
                 animate={{scale: 1}}
                 transition={{
                    duration: 2,
                    ease: 'easeInOut',
                    type: 'spring'
                 }}
                 >
                    Bienvenido a MyShoes
                </motion.h1>
                </div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={banner1} className="d-block w-100" alt="Banner" />
                        </div>
                        <div className="carousel-item">
                            <img src={banner2} className="d-block w-100" alt="banner2" />
                        </div>
                        <div className="carousel-item">
                            <img src={banner1} className="d-block w-100" alt="banner1" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner;
import React from "react";
import banner1 from "./img/1.png";
import banner2 from "./img/BannerSale1.png";

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100" alt="Banner"/>
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="d-block w-100" alt="banner2"/>
                    </div>
                    <div className="carousel-item">
                        <img src={banner1} className="d-block w-100" alt="banner1"/>
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
    )
}

export default Banner;
import "./hero.scss"
import versace from "../../../../assets/images/hero/versace.png"
import zara from "../../../../assets/images/hero/zara.png"
import gucci from "../../../../assets/images/hero/gucci.png"
import prada from "../../../../assets/images/hero/prada.png"
import calvinKelin from "../../../../assets/images/hero/calvin-klein.png"
import heroImg from "../../../../assets/images/hero/hero-image.png"
import vector from "../../../../assets/images/hero/vector.png"
import minVector from "../../../../assets/images/hero/min-vector.png"
import { memo } from "react"
const Hero = () => {
    return (
        <>
            <section className="hero max-container">
                <div className="container">
                    <div className="hero__wrapper">
                        <div className="hero__content-wrapper">
                            <div className="hero__content">
                                <h1 className="hero__title">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                                <p className="hero__text">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                            </div>
                            <button className="hero__btn">Shop Now</button>
                            <div className="hero__cards">
                                <div className="hero__card">
                                    <h3 className="hero__card-title">200+</h3>
                                    <p className="hero__card-text">International Brands</p>
                                </div>
                                <div className="hero__card">
                                    <h3 className="hero__card-title">2,000+</h3>
                                    <p className="hero__card-text">High-Quality Products</p>
                                </div>
                                <div className="hero__card">
                                    <h3 className="hero__card-title">30,000+</h3>
                                    <p className="hero__card-text">Happy Customers</p>
                                </div>
                            </div>
                        </div>
                        <div className="hero__image">
                            <img className="hero__min-vector" src={minVector} alt="" />
                            <img className="hero__img" src={heroImg} alt="hero background img" />
                            <img className="hero__vector" src={vector} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="sap-hero">
                {/* <marquee behavior="scroll" direction="left" scrollamount="10" loop="infinite"> */}
                <div className=" container sap-hero__wrapper">
                    <img src={versace} alt="versace" />
                    <img src={zara} alt="zara" />
                    <img src={gucci} alt="gucci" />
                    <img src={prada} alt="prada" />
                    <img src={calvinKelin} alt="Calvin Kelin" />
                    <img src={versace} alt="versace" />
                    <img src={zara} alt="zara" />
                </div>
                {/* </marquee> */}
            </div>
        </>
    )
}

export default memo(Hero)
import React from 'react';
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
            </div>
            <div className="home__row">
                <Product
                    id="521346212"
                    title="Reebok Unisex-Adult Royal Complete Sport Tennis Shoe"
                    price={89.99}
                    image="https://m.media-amazon.com/images/I/61ZARfcFN1L._UL1500_.jpg"
                    rating={3}
                />
                <Product
                    id="85467123"
                    title="American Marxism"
                    price={186}
                    image="https://images-na.ssl-images-amazon.com/images/I/51gGgVnODsL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
                    rating={3}
                />
                <Product
                    id="754623512"
                    title="OnePlus Nord CE 5G (Blue Void, 8GB RAM, 128GB Storage)"
                    price={25000}
                    image="https://m.media-amazon.com/images/I/61iy2Ru9KdS._SL1500_.jpg"
                    rating={5}
                />
                {/*product */}
            </div>

            <div className="home__row">
                {/*product */}
                <Product
                    id="12321341"
                    title="The Lean Startup: Now Constant Innovation creates Radically Sucessfully Business Paperback"
                    price={19.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81RCff1NpnL.jpg"
                    rating={3}
                />
                {/*product */}
                <Product
                    id="49538094"
                    title="my name is ankit"
                    price={89.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51gGgVnODsL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
                    rating={3}
                />
                {/*product */}
                <Product
                    id=""
                    title="SamsungLC47859UxEN | 49'AMLOD display LED"
                    price="190"
                    rating={4}
                    image="https://www.mytrendyphone.eu/images/Forever-ForeVigo-SW-300-Waterproof-Smartwatch-Black-5900495780478-29102019-01-p.jpg"
                />
                <Product
                    id=""
                    title="SamsungLC47859UxEN | 49'AMLOD display LED"
                    price="190"
                    rating={4}
                    image="https://www.mytrendyphone.eu/images/Forever-ForeVigo-SW-300-Waterproof-Smartwatch-Black-5900495780478-29102019-01-p.jpg"
                />
            </div>

            <div className="home__row">
                {/*product */}
                <Product
                    id=""
                    title="SamsungLC47859UxEN | 49'AMLOD display LED"
                    price="190"
                    rating={4}
                    image="https://www.mytrendyphone.eu/images/Forever-ForeVigo-SW-300-Waterproof-Smartwatch-Black-5900495780478-29102019-01-p.jpg"
                />
            </div>
        </div>
    );
}

export default Home;

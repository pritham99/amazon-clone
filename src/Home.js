import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="12321341"
            tittle="Arach&Cloz Womens Sweaters Soft Fall 2024 Fashion Versatile Dressy Blouse Short Sleeve Knit Lightweight Tops Summer Trendy"
            price={15.99}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/718q-a68bDL._AC_SY879_.jpg"
            }
          />
          <Product
            id="12321342"
            tittle="The Orphanage By The Lake: A Captivating Psychological Crime Thriller With A Twist"
            price={15.99}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/41dkC4pUv0L._SY445_SX342_.jpg"
            }
          />
        </div>
        <div className="home_row">
          <Product
            id="12321343"
            tittle="Apple Watch SE (2nd Gen) [GPS 40mm] Smartwatch with Midnight Aluminum Case with Midnight Sport Loop. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Carbon Neutral"
            price={189.99}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/819CwRIckoL._AC_UY327_FMwebp_QL65_.jpg"
            }
          />
          <Product
            id="12321344"
            tittle="Stanley Quencher H2.0 FlowState Stainless Steel Vacuum Insulated Tumbler with Lid and Straw for Water, Iced Tea or Coffee"
            price={45.99}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/51glBADjrpL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            }
          />
          <Product
            id="12321345"
            tittle="Dove Body Wash Deep Moisture, Sensitive Skin, Cucumber and Green Tea, and Shea Butter & Vanilla Collection 4 Count Skin Cleanser with 24hr Renewing MicroMoisture 20 oz"
            price={24.0}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/417J-m54suL._SX300_SY300_QL70_FMwebp_.jpg"
            }
          />
        </div>
        <div className="home_row">
          <Product
            id="12321346"
            tittle="SAMSUNG 43-Inch Class 4K Crystal UHD DU8000 Series HDR Smart TV w/Object Tracking Sound Lite, Motion Xcelerator 120Hz, Ultra Slim Design, Gaming Hub, Alexa Built-in (UN43DU8000, 2024 Model)"
            price={324.0}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/71J5KCmNhCL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

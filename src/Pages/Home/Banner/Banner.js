import React from "react";
import banner from "../../../assete/banner/banner.png";

const Banner = () => {
  return (
    <div>
      <div className="carousel mb-5 w-full">
        <div id="item1" className="carousel-item w-full">
          <div
            className="hero w-full"
            style={{
              // backgroundImage: `url("https://scontent.fdac20-1.fna.fbcdn.net/v/t1.6435-9/53581843_10158409518567576_490811175911555072_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGHwrBI_PAlNHf883trtGxvzUvzIBQhdtLNS_MgFCF20upUhpHPgt8apYFQEv6SL6HhejmJGgeANb1oYSR0MSZg&_nc_ohc=lRtpkVOyJR4AX_xOyve&_nc_ht=scontent.fdac20-1.fna&oh=00_AfDB6qIkKvmc_xFHpwtGdOd-7la9aS1wn_dtirijRlt3zA&oe=63A5E1D4")`,
              backgroundImage: `url(${banner})`,
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-right text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Welcome to <span className="text-sky-900">Computer</span>{" "}
                  <span className="text-orange-500">Zone</span>
                </h1>
                <p className="mb-5 text-2xl">For Wholesale & Retail</p>
                <button className="btn btn-primary">View Store</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

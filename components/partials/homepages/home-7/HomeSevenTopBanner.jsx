import React from "react";
import Link from "next/link";

const HomeSevenTopBanner = () => {
    return (
        <div className="ps-top-banners">
            <div className="ps-banner--home-seven">
                <img
                    src="/static/img/banners/home-7-banner.jpg"
                    alt=""
                    className="ps-banner__image"
                />
                <div className="ps-banner__content">
                    <span className="ps-banner__badge">New</span>
                    <h3>
                        SonicX900 <br />
                        Electrical Brush
                    </h3>
                    <p>Now with special price -30%</p>
                    <div className="ps-banner__meta">
                        <span>
                            <img
                                src="/static/img/icon/bacterial.svg"
                                alt=""
                                className="mr-2"
                                style={{
                                    filter: "invert(60%) sepia(75%) saturate(1000%) hue-rotate(360deg) brightness(100%) contrast(100%)",
                                }}
                            />
                            Anti-Bacterial
                        </span>
                        <span>
                            <img
                                src="/static/img/icon/virus.svg"
                                alt=""
                                className="mr-2"
                                style={{
                                    filter: "invert(60%) sepia(75%) saturate(1000%) hue-rotate(360deg) brightness(100%) contrast(100%)",
                                }}
                            />
                            Anti-Virus
                        </span>
                    </div>
                    <Link href="/shop">
                        <a className="ps-btn ps-btn--second"> Shop now</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeSevenTopBanner;

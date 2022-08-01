import React from "react";
import Container from "~/components/layouts/Container";
import FeaturedProducts from "~/components/shared/sections/FeaturedProducts";
import BestDealOfWeek from "~/components/partials/homepages/sections/BestDealOfWeek";
import TopSellers from "~/components/partials/homepages/sections/TopSellers";
import Subscribe from "~/components/shared/sections/Subscribe";
import FollowInstagram from "~/components/shared/sections/FollowInstagram";
import LatestProducts from "~/components/partials/homepages/sections/LatestProducts";
import PopularCategories from "~/components/partials/homepages/sections/PopularCategories";
import HomeOnePromotions from "~/components/partials/homepages/home-1/HomeOnePromotions";
import HomeOneTopBanners from "~/components/partials/homepages/home-1/HomeOneTopBanners";
import PromotionSecureInformation from "~/components/shared/sections/PromotionSecureInformation";
import HomeOnePromotionsTwo from "~/components/partials/homepages/home-1/HomeOnePromotionsTwo";
import Testimonials from "~/components/shared/sections/Testimonials";
import HeaderDefault from "~/components/shared/headers/HeaderDefault";

const HomeDefaultPage = () => {
    return (
        <Container
            title="React Ecomerce Template with RESTFul API"
            header={<HeaderDefault classes="without-border" />}>
            <main id="homepage-one">
                <HomeOneTopBanners />
                <HomeOnePromotions />
                <PopularCategories />
                <LatestProducts />
                <div className="container">
                    <PromotionSecureInformation />
                </div>
                <BestDealOfWeek />
                <TopSellers />
                <HomeOnePromotionsTwo />
                <FeaturedProducts />
                <Testimonials />
                <FollowInstagram />
                <Subscribe />
            </main>
        </Container>
    );
};

export default HomeDefaultPage;

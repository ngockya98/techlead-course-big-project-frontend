import React, { useEffect } from "react";
import { wrapper } from "../store/store";
import MasterLayout from "~/components/layouts/MasterLayout";
import { CookiesProvider } from "react-cookie";
import "swiper/swiper-bundle.min.css";
import "antd/dist/antd.compact.min.css";
import "~/public/static/css/bootstrap.min.css";
import "~/public/static/fonts/feather-font/css/iconfont.css";
import "~/public/static/fonts/Linearicons/Font/demo-files/demo.css";
import "~/public/static/fonts/font-awesome/css/font-awesome.min.css";
import "~/public/static/css/style.min.css";
import "~/public/static/css/slick.min.css";
import "~/styles/scss/home-1.scss";
import "~/styles/platform/custom.scss";
import "~/styles/platform/themes/home-one.scss";
import Head from "next/head";

function App({ Component, pageProps }) {
    useEffect(() => {
        setTimeout(function () {
            document.getElementById("__next").classList.add("ps-loaded");
        }, 100);
    });

    return (
        <CookiesProvider>
            <MasterLayout>
                <Component {...pageProps} />
            </MasterLayout>
        </CookiesProvider>
    );
}

export default wrapper.withRedux(App);

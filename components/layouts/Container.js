import React from "react";
import Head from "next/head";
import HeaderDefault from "~/components/shared/headers/HeaderDefault";
import FooterDefault from "~/components/shared/footers/FooterDefault";
import HeaderMobile from "~/components/shared/mobiles/HeaderMobile";

const Container = ({
    children,
    title = "Just a awesome website",
    header = <HeaderDefault />,
    footer = <FooterDefault />,
}) => {
    let titleView;
    if (title !== undefined) {
        titleView = process.env.title + " | " + title;
    } else {
        titleView = process.env.title + " | " + process.env.titleDescription;
    }
    return (
        <div className="ps-root">
            <Head>
                <title>{titleView}</title>
            </Head>
            {header}
            <HeaderMobile />
            {children}
            {footer}
        </div>
    );
};

export default Container;

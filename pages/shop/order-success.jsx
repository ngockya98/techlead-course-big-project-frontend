import React from "react";
import Container from "~/components/layouts/Container";
import BreadCrumb from "~/components/elements/BreadCrumb";
import { Alert } from "antd";

const CheckoutScreen = () => {
    const breadcrumb = [
        {
            text: "Home",
            url: "/",
        },
        {
            text: "Shop",
            url: "/shopping-cart",
        },
        {
            text: "Order Success",
        },
    ];

    return (
        <Container title="Order Succe">
            <div className="ps-page ps-page--inner">
                <div className="container">
                    <div className="ps-page__header">
                        <BreadCrumb breacrumb={breadcrumb} />
                        <h1 className="ps-page__heading">Order Success</h1>
                    </div>
                    <div className="ps-page__content">
                        <div className="row">
                            <div className="col-md-6">
                                <Alert
                                    message="Thank you. Your order has been received."
                                    description="Commodi doloremque dolorum, harum molestias numquam odit quasi quo rerum veritatis voluptas. Accusantium dolore fuga iure minus molestiae nemo nisi sint sit? "
                                    type="success"
                                    showIcon
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CheckoutScreen;

import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import {
    calculateCartQuantity,
    calculateAmount,
} from "~/utilities/ecomerce-helpers";
import ProductOnCart from "~/components/elements/products/ProductOnCart";
import { Alert } from "antd";
import Link from "next/link";
import { toggleDrawer } from "~/store/app/action";
import useEcomerce from "~/hooks/useEcomerce";

const EcomerceMiniCart = ({ ecomerce }) => {
    const dispatch = useDispatch();
    const { products, removeItem, removeItems, getProducts } = useEcomerce();

    function handleRemoveItem(e, productId) {
        e.preventDefault();
        removeItem({ id: productId }, ecomerce.cartItems, "cart");
    }

    function handleCloseDrawer(e) {
        e.preventDefault();
        dispatch(toggleDrawer(false));
    }

    function handleRemoveCart(e) {
        e.preventDefault();
        removeItems("cart");
    }

    useEffect(() => {
        // Get products in your shopping cart
        getProducts(ecomerce.cartItems, "cart");
    }, [ecomerce]);

    // View
    let cartItemsView, cartActionsView, cartQuantityView, cartAmountView;

    if (products) {
        if (products.length > 0) {
            cartAmountView = calculateAmount(products);
            cartQuantityView = calculateCartQuantity(products);
            const items = products.map((item) => (
                <div className="ps-cart__item" key={item.id}>
                    <ProductOnCart product={item}>
                        <p className="ps-product__meta">
                            <span>{item.quantity} x item</span>
                            <a
                                href="#"
                                className="ps-product__remove-item"
                                onClick={(e) => handleRemoveItem(e, item.id)}>
                                <strong>Remove</strong>
                            </a>
                        </p>
                    </ProductOnCart>
                </div>
            ));
            cartItemsView = <div className="ps-cart__items">{items}</div>;
            cartActionsView = (
                <>
                    <div className="ps-cart__summary">
                        <div className="ps-cart__total">
                            <h4>
                                Total: <strong>${cartAmountView}</strong>
                            </h4>
                        </div>
                        <div className="ps-cart__clear-cart">
                            <a
                                href="#"
                                className="ps-btn ps-btn--sm ps-btn--outline"
                                onClick={(e) => handleRemoveCart(e)}>
                                Clear all items
                            </a>
                        </div>
                    </div>
                    <div className="ps-cart__actions">
                        <Link href="/shop/shopping-cart">
                            <a className="ps-btn ps-btn--primary">View Cart</a>
                        </Link>
                        <Link href="/shop/checkout">
                            <a className="ps-btn ps-btn--orange">Checkout</a>
                        </Link>
                    </div>
                </>
            );
        } else {
            cartItemsView = (
                <div className="ps-cart__items">
                    <Alert message="Cart empty!" type="warning" />
                </div>
            );
            cartActionsView = (
                <>
                    <a
                        href="/shop"
                        className="ps-btn ps-btn--primary"
                        onClick={(e) => handleCloseDrawer(e)}>
                        Back to shop
                    </a>
                </>
            );
        }
    }
    return (
        <div className="ps-cart--simple">
            <div className="ps-cart__header">
                <h3>
                    Shopping Cart <sup>({cartQuantityView})</sup>
                </h3>
            </div>
            <div className="ps-cart__content">
                {cartItemsView}
                {cartActionsView}
            </div>
        </div>
    );
};

export default connect((state) => state)(EcomerceMiniCart);

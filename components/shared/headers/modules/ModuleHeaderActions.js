import React, { useEffect, useState } from "react";
import { toggleDrawer } from "~/store/app/action";
import { useDispatch, connect } from "react-redux";
import Link from "next/link";

import {
    caculateArrayQuantity,
    calculateCartQuantity,
} from "~/utilities/ecomerce-helpers";

const ModuleHeaderActions = ({ ecomerce, search = false }) => {
    const dispatch = useDispatch();
    const [cartTotal, setCartTotal] = useState(0);
    const [wishlistTotal, setWishlistTotal] = useState(0);

    function handleOpenDrawer(e) {
        e.preventDefault();
        dispatch(toggleDrawer(true));
    }

    useEffect(() => {
        if (ecomerce.cartItems) {
            setCartTotal(calculateCartQuantity(ecomerce.cartItems));
        }
        if (ecomerce.wishlistItems) {
            setWishlistTotal(caculateArrayQuantity(ecomerce.wishlistItems));
        }
    }, [ecomerce]);

    // view
    let searchBtnView;
    if (search) {
        searchBtnView = (
            <li>
                <a className="header__action" href="#">
                    <i className="icon-magnifier"></i>
                </a>
            </li>
        );
    }

    return (
        <ul className="header__actions">
            {searchBtnView}
            <li>
                <Link href="/my-account">
                    <a className="header__action">
                        <i className="icon-user"></i>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/shop/wishlist">
                    <a className="header__action">
                        <i className="fa fa-heart-o"></i>
                        <span className="header__action-badge">
                            {wishlistTotal ? wishlistTotal : 0}
                        </span>
                    </a>
                </Link>
            </li>
            <li>
                <a
                    className="header__action"
                    href="#"
                    id="cart-mini"
                    onClick={(e) => handleOpenDrawer(e)}>
                    <i className="icon-cart-empty"></i>
                    <span className="header__action-badge">
                        {cartTotal ? cartTotal : 0}
                    </span>
                </a>
            </li>
        </ul>
    );
};

export default connect((state) => state)(ModuleHeaderActions);

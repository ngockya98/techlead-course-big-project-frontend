import React from "react";
import Container from "~/components/layouts/Container";

const MyAccountScreen = () => {
    return (
        <Container title="My Account">
            <div className="ps-page ps-page--inner ">
                <div className="container">
                    <div className="ps-page__header"></div>
                    <div className="ps-page__content ps-account">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <form action="do_action" method="post">
                                    <div className="ps-form--review">
                                        <h2 className="ps-form__title">
                                            Login
                                        </h2>
                                        <div className="ps-form__group">
                                            <label className="ps-form__label">
                                                Username or email address *
                                            </label>
                                            <input
                                                className="form-control ps-form__input"
                                                type="email"
                                            />
                                        </div>
                                        <div className="ps-form__group">
                                            <label className="ps-form__label">
                                                Password *
                                            </label>
                                            <div className="input-group">
                                                <input
                                                    className="form-control ps-form__input"
                                                    type="password"
                                                />
                                                <div className="input-group-append">
                                                    <a
                                                        className="fa fa-eye-slash toogle-password"
                                                        href="#"></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ps-form__submit">
                                            <button className="ps-btn ps-btn--warning">
                                                Log in
                                            </button>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="remember"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="remember">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <a
                                            className="ps-account__link"
                                            href="lost-password.html">
                                            Lost your password?
                                        </a>
                                    </div>
                                </form>
                            </div>
                            <div className="col-12 col-md-6">
                                <form action="do_action" method="post">
                                    <div className="ps-form--review">
                                        <h2 className="ps-form__title">
                                            Register
                                        </h2>
                                        <div className="ps-form__group">
                                            <label className="ps-form__label">
                                                Email address *
                                            </label>
                                            <input
                                                className="form-control ps-form__input"
                                                type="email"
                                            />
                                        </div>
                                        <div className="ps-form__group">
                                            <label className="ps-form__label">
                                                Password *
                                            </label>
                                            <div className="input-group">
                                                <input
                                                    className="form-control ps-form__input"
                                                    type="password"
                                                />
                                                <div className="input-group-append">
                                                    <a
                                                        className="fa fa-eye-slash toogle-password"
                                                        href="#"></a>
                                                </div>
                                            </div>
                                            <p className="ps-form__text">
                                                Hint: The password should be at
                                                least twelve characters long. To
                                                make it stronger, use upper and
                                                lower case letters, numbers, and
                                                symbols like ! " ? $ % ^ &amp;
                                                ).
                                            </p>
                                        </div>
                                        <div className="ps-form__submit">
                                            <button className="ps-btn ps-btn--warning">
                                                Register
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default MyAccountScreen;

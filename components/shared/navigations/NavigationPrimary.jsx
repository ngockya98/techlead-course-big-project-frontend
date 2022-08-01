import React from "react";
import ModuleHeaderContactNumber from "~/components/shared/headers/modules/ModuleHeaderContactNumber";
import ModuleHeaderCategories from "~/components/shared/headers/modules/ModuleHeaderCategories";
import ModuleHeaderSupplies from "~/components/shared/headers/modules/ModuleHeaderSupplies";
import Menu from "~/components/elements/menu/Menu";
import menu from "~/public/static/data/menu.json";

const NavigationPrimary = () => {
    return (
        <nav className="navigation--primary">
            <div className="container">
                <div className="navigation__left">
                    <ModuleHeaderCategories />
                    <ModuleHeaderSupplies />
                    <div className="navigation__menu">
                        <Menu
                            source={menu.main_menu}
                            className="menu menu--desktop"
                        />
                    </div>
                </div>
                <div className="navigation__right">
                    <ModuleHeaderContactNumber />
                </div>
            </div>
        </nav>
    );
};

export default NavigationPrimary;

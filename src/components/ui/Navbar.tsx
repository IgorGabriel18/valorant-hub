"use client";
import { List, X } from "@phosphor-icons/react";

import { Logo, Navigation } from "~components/common";
import { useNavbar } from "~hooks/useNavbar";
import { render } from "~utils/render";

export function Navbar() {
    const { renderMenuButton, renderNavigation, visibility, handleClickToggleVisibility } = useNavbar();

    return (
        <header className="w-full h-min pt-10 px-4 pb-4 fixed inset-0 z-20 grid grid-cols-max-screen grid-rows-1 justify-center bg-glass backdrop-blur-lg">
            <div className="w-full h-min flex flex-wrap gap-y-4 justify-between md:flex-none md:grid md:grid-cols-3fr md:grid-rows-1 md:justify-items-center md:items-center">
                <Logo />
                {render(
                    renderMenuButton,
                    <button
                        type="button"
                        onClick={handleClickToggleVisibility}
                        className="w-max h-min block"
                    >
                        {render(
                            visibility,
                            <X className="text-slate-50 text-4xl animate-simple-render block" />,
                            <List className="text-slate-50 text-4xl animate-simple-render block" />
                        )}
                    </button>
                )}
                {render(
                    renderNavigation,
                    <Navigation
                        layout="navbar"
                        onClick={handleClickToggleVisibility}
                    />
                )}
            </div>
        </header>
    );
}

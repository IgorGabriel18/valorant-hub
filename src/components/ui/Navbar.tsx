"use client";
import { X, List } from "@phosphor-icons/react";

import { Logo, Navigation } from "~components/common";
import { useNavbar } from "~hooks/useNavbar";
import { render } from "~utils/render";

export function Navbar() {
    const { renderMenuButton, renderNavigation, visibility, handleClickToggleVisibility } = useNavbar();

    return (
        <header className="w-full h-min pt-10 px-4 pb-4 fixed inset-0 z-20 grid grid-cols-max-screen grid-rows-1 justify-center bg-glass">
            <div className="w-full h-min flex flex-wrap gap-y-4 gap-x-12 justify-between items-center md:justify-around">
                <Logo />
                {render(
                    renderMenuButton,
                    <button
                        type="button"
                        onClick={handleClickToggleVisibility}
                    >
                        {render(
                            visibility,
                            <X className="text-slate-50 text-4xl animate-simple-render" />,
                            <List className="text-slate-50 text-4xl animate-simple-render" />
                        )}
                    </button>
                )}
                {render(renderNavigation, <Navigation breakpoint="md" />)}
            </div>
        </header>
    );
}

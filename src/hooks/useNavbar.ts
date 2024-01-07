"use client";
import { useContext, useState } from "react";

import { ScreenContext } from "~contexts/ScreenContext";

export const useNavbar = () => {
    const { screenWidth, breakpoints } = useContext(ScreenContext);
    const [visibility, setVisibility] = useState(false);

    const renderMenuButton = screenWidth < breakpoints.md;
    const renderNavigation = screenWidth >= breakpoints.md || visibility;
    const handleClickToggleVisibility = () => (screenWidth < breakpoints.md ? setVisibility(!visibility) : undefined);

    return { renderMenuButton, renderNavigation, visibility, handleClickToggleVisibility };
};

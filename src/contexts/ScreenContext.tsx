"use client";
import { createContext, useEffect, useState, useCallback } from "react";

import { IChildren } from "~types/global-types";
import { breakpoints } from "~utils/constants";

interface IScreenContext {
    screenWidth: number;
    breakpoints: typeof breakpoints;
}

export const ScreenContext = createContext({} as IScreenContext);

export function ScreenContextProvider({ children }: IChildren) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleScreenWidth = useCallback(() => {
        setScreenWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        setScreenWidth(window.innerWidth);

        window.addEventListener("resize", handleScreenWidth);

        return () => window.removeEventListener("resize", handleScreenWidth);
    }, [handleScreenWidth]);

    return <ScreenContext.Provider value={{ screenWidth, breakpoints }}>{children}</ScreenContext.Provider>;
}

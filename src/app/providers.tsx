import { ScreenContextProvider } from "~contexts/ScreenContext";
import { IChildren } from "~types/global-types";

export function Providers({ children }: IChildren) {
    return <ScreenContextProvider>{children}</ScreenContextProvider>;
}

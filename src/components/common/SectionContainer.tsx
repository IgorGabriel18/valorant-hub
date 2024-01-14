import { IChildren } from "~types/global-types";

interface ISectionContainerProps extends IChildren {
    heightFull?: true;
    bgImage?: string;
}

export function SectionContainer({ heightFull, bgImage, children }: ISectionContainerProps) {
    return (
        <section
            className={`w-full h-min pt-28 px-4 pb-4 grid grid-cols-max-screen grid-rows-1 place-content-center ${
                heightFull && "min-h-screen"
            } ${bgImage && `${bgImage} bg-center bg-cover`}`}
        >
            <div>{children}</div>
        </section>
    );
}

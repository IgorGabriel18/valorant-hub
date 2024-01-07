import Image from "next/image";

import logoIcon from "~assets/icons/logo.svg";

export function Logo() {
    return (
        <Image
            src={logoIcon}
            width={40}
            height={40}
            alt="Logo"
        />
    );
}

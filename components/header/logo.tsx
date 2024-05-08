import Image from "next/image";
import Link from "next/link";
import LogoImagem from "../../public/logo.png";

export default function Logo() {
    return (
        <Link href="/">
            <Image src={LogoImagem} width={100} height={45} alt="" className="mx-auto" />
        </Link>
    )
}
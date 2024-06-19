import { IconBrandFacebook, IconBrandInstagram, IconBrandTelegram, IconBrandYoutube } from "@tabler/icons-react";
import Link from "next/link";

export default function Social() {
    return (
        <>
            <p className="text-center text-sm text-white/60 mb-3">Jogue com Responsabilidade (+18)</p>
            <ul className="w-full inline-flex gap-2 justify-center">
                <Link href="https://instagram.com/strike777_bet">
                    <li className="w-12 h-12 bg-white/10 flex items-center justify-center hover:bg-orange-500 text-white">
                        <IconBrandInstagram stroke={2} className="w-6 h-6" />
                    </li>
                </Link>
                <Link href="https://t.me/strike777oficial">
                    <li className="w-12 h-12 bg-white/10 flex items-center justify-center hover:bg-orange-500 text-white">
                        <IconBrandTelegram stroke={2} className="w-6 h-6" />
                    </li>
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=61555171826393&locale=pt_BR">
                    <li className="w-12 h-12 bg-white/10 flex items-center justify-center hover:bg-orange-500 text-white">
                        <IconBrandFacebook stroke={2} className="w-6 h-6" />
                    </li>
                </Link>
                <Link href="https://www.youtube.com/@strike777-jq5zw">
                    <li className="w-12 h-12 bg-white/10 flex items-center justify-center hover:bg-orange-500 text-white">
                        <IconBrandYoutube stroke={2} className="w-6 h-6" />
                    </li>
                </Link>
            </ul>
        </>
    )
}
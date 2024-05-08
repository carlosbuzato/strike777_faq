import { IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";

export default function Button() {
    return (
        <Link href="https://strike777.bet/">
            <button className="w-full h-12 flex items-center justify-center rounded-md text-sm font-bold uppercase bg-green-500 hover:bg-green-600 shadow-lg px-4">
                <IconExternalLink stroke={2} className="w-4 h-4 mr-1" />
                Ir Para Strike777
            </button>
        </Link>
    )
}
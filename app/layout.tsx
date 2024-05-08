import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Main from "@/components/main/main";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Central de Ajuda | STRIKE777",
    description: "Olá jogador, como posso te ajudar?",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt">
            <body className={montserrat.className}>
                <div className="flex flex-col min-h-screen justify-between">
                    <Header />
                    <Main>{children}</Main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}

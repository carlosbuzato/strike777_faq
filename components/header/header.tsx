import Button from "./button";
import Logo from "./logo";

export default function Header() {
    return (
        <header className="w-full lg:h-36 bg-[#0a0a0a] border-b-2 border-orange-600">
            <div className="w-full lg:w-9/12 lg:h-36 grid grid-cols-12 gap-8 mx-auto px-10 pt-5 pb-10 lg:p-0">
                <div className="col-span-12 lg:col-span-9 flex items-center justify-center lg:justify-start">
                    <Logo />
                </div>
                {/* <div className="col-span-12 lg:col-span-7 flex items-center">
                    <Search />
                </div> */}
                <div className="col-span-12 lg:col-span-3 flex items-center justify-center lg:justify-end">
                    <Button />
                </div>
            </div>
        </header>
    )
}